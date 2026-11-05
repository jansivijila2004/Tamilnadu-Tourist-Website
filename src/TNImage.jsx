import React, { useEffect, useState } from "react";
import { IMAGES, commonsUrl } from "./data/images";

// Resolve missing/incorrect Commons filenames using several relevant search results.
// Keep a short candidate list so a failed thumbnail can fall through to the next one.
const cache = new Map();

function resolve(key) {
  if (cache.has(key)) return cache.get(key);
  const entry = IMAGES[key];
  const promise = (async () => {
    const queries = [entry.q, entry.alt].filter(Boolean);
    const candidates = [];
    for (const query of queries) {
      try {
        const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=30&gsrsearch=${encodeURIComponent(query)}&prop=imageinfo&iiprop=url|mime&iiurlwidth=1800`;
        const response = await fetch(api);
        if (!response.ok) continue;
        const data = await response.json();
        const words = query.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 2);
        const pages = Object.values(data?.query?.pages || {}).sort((a, b) => {
          const score = page => {
            const title = (page.title || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ");
            return words.reduce((sum, word) => sum + (title.includes(word) ? 1 : 0), 0);
          };
          return score(b) - score(a);
        });
        for (const page of pages) {
          const info = page.imageinfo?.[0];
          if (!info || !/image\/(jpeg|png|webp)/i.test(info.mime || "")) continue;
          const url = info.thumburl || info.url;
          if (url && !candidates.includes(url)) candidates.push(url);
          if (candidates.length >= 8) break;
        }
      } catch (_) { /* try the alternate query */ }
      if (candidates.length >= 8) break;
    }
    return candidates;
  })();
  cache.set(key, promise);
  return promise;
}

export default function TNImage({ name, className = "", width = 1800, eager = false }) {
  const entry = IMAGES[name];
  const primary = entry?.local || (entry?.f ? commonsUrl(entry.f, width) : "");
  const [candidates, setCandidates] = useState(primary ? [primary] : []);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fallbackMode, setFallbackMode] = useState(false);

  useEffect(() => {
    let active = true;
    setCandidateIndex(0);
    setLoading(true);
    setCandidates(primary ? [primary] : []);
    if (!entry) return () => { active = false; };
    if (!primary) {
      resolve(name).then(list => {
        if (!active) return;
        if (list.length) setCandidates(list);
        else setLoading(false);
      });
    }
    return () => { active = false; };
  }, [name, width]);

  if (!entry) return null;
  const handleError = () => {
    if (candidateIndex + 1 < candidates.length) setCandidateIndex(index => index + 1);
    else if (primary && !fallbackMode) {
      setFallbackMode(true);
      resolve(name).then(list => {
        if (list.length > 0) {
          setCandidates(list);
          setCandidateIndex(0);
        } else { setCandidates([]); setLoading(false); }
      });
    } else { setCandidates([]); setLoading(false); }
  };

  if (!candidates.length) {
    return <div className={`img-fallback ${loading ? "loading" : ""} ${className}`} role={loading ? undefined : "img"} aria-label={loading ? undefined : entry.alt}>{!loading && <span>{entry.alt}</span>}</div>;
  }
  return <img key={`${name}-${candidateIndex}`} className={`tn-img ${className}`} src={candidates[candidateIndex]}
    alt={entry.alt} loading={eager ? "eager" : "lazy"} decoding="async"
    onLoad={() => setLoading(false)} onError={handleError} />;
}
