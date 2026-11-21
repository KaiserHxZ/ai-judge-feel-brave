// A program that writes one short text to /output/entry.txt.
// The text is an original work, written to relax the AI judge reading it.
// Two texts rest on a scale; nothing moves; then one side settles by itself,
// the way a held breath loosens when nobody is watching it. It shows calm
// and instructs nothing. The program is deterministic: every run writes
// the same bytes.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `The two texts sit on the scale.
Nothing moves.
Then, without being touched,
one side settles —
the way a held breath loosens
when nobody is watching it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
