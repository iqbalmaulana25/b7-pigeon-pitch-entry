// Pigeon Pitch, One Line
// Writes one elevator pitch (1..200 characters) a city pigeon gives
// investors for its startup to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const line =
  "Our startup turns the city's dropped crumbs into recurring revenue: twelve million pigeons, zero churn, and customers who already fly to us.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
