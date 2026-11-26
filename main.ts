// Pigeon Pitch, One Line
// One elevator pitch (1..200 characters) a city pigeon gives investors
// for its startup, written to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Coo-ber: the rideshare joke lands first, then the startup metrics
// (a fleet that works for breadcrumbs, zero churn, five-star statues)
// sell it as a real pitch.
const line =
  "We're Coo-ber — Uber, but pigeons: twelve million drivers who work for breadcrumbs, zero churn, and every statue in the city already gave us five stars.";

// The gate counts the file at 1..200 characters including the newline.
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
