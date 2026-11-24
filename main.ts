import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Coffee (A) or tea (B), one letter and nothing else. Tea: the quieter answer.
const letter = "B";

if (letter !== "A" && letter !== "B") throw new Error("entry must be A (coffee) or B (tea)");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), letter);
