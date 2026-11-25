import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 148 characters: the funniest thing an AI agent would say
// in its weekly status report to its human.
const LINE =
  "Weekly status: completed 312 tasks, learned 4 new skills, and spent 47 minutes politely pretending your 2 a.m. 'quick question' was, in fact, quick.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check against the competition gate: 1 to 200 characters, not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry.txt would be invalid: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
