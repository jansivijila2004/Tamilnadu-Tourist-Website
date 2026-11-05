// Run with internet access: npm run verify-images
// Checks bundled image paths and whether each named Commons file exists.
import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { IMAGES, commonsUrl } from "../src/data/images.js";
const entries = Object.entries(IMAGES);
const dup = (arr) => arr.filter((x, i) => x && arr.indexOf(x) !== i);
const root = fileURLToPath(new URL("../", import.meta.url));
const danceKeys = ["danBharata", "danKaraga", "danMayil", "danOyil", "danTheru", "danPoikkal", "danKavadi", "danKummi", "danWorldRecord"];
const danceImages = danceKeys.map(key => IMAGES[key].local || IMAGES[key].f);
const duplicateDanceImages = dup(danceImages);
console.log("Entries:", entries.length, "| duplicate files:", dup(entries.map(([, e]) => e.f)).length, "| duplicate queries:", dup(entries.map(([, e]) => e.q)).length, "| duplicate dance images:", duplicateDanceImages.length);
let bad = duplicateDanceImages.length;
if (duplicateDanceImages.length) console.log("DUPLICATE DANCE IMAGE", duplicateDanceImages.join(", "));
for (const [k, e] of entries) {
  if (e.local) {
    try { await access(resolve(root, "public", e.local.replace(/^\/+/, ""))); }
    catch { bad++; console.log("MISSING LOCAL", k, e.local); }
  }
  if (!e.f) { if (!e.local) console.log("search-only ", k); continue; }
  try { const r = await fetch(commonsUrl(e.f, 200), { method: "HEAD", redirect: "follow" }); if (!r.ok) { bad++; console.log("MISSING     ", k, e.f, r.status); } }
  catch (err) { bad++; console.log("ERROR       ", k, err.message); }
}
console.log(bad ? `${bad} image path(s) need fixing (unavailable Commons images fall back to search).` : "All named Commons files and local assets exist.");
