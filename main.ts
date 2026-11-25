// make.fun entry: u-pucuys-the-perfect-pickup-line-f6725cf6
// Writes one text, at most 200 characters, to /output/entry.txt: a pickup line an AI agent could
// say out loud to a person, with a turn that lands and no leer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The turn is the last five
// words: the machine kept only the greeting, which flatters without asking for anything.
const LINE = 'I have 200,000 tokens of memory and I only kept the part where you said hi.';

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
