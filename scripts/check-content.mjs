#!/usr/bin/env node
/**
 * Content and UI-consistency guard. Run: npm run check:content
 * P0 = must fix before launch, P1 = should fix, P2 = review.
 */
import fs from "node:fs";
import path from "node:path";

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(e.name)) files.push(p);
  }
})("src");

const findings = [];
const add = (level, file, line, msg) => findings.push({ level, file, line, msg });

// Brand voice (spec §129): avoid hype vocabulary.
const hype = /\b(revolutionary|game-changing|world-class|unparalleled|next-generation|cutting-edge|best-in-class|seamless(ly)?)\b/i;
// Trust (spec §20, §138): never promise outcomes we cannot guarantee.
const promises = /\b(guaranteed (job|employment|placement|visa)|job guarantee|100% (placement|accurate)|completely unbiased)\b/i;
// Entity consistency (spec §89): only official product names.
const offBrand = /\b(DB Academy|Digital Burj|Burj Academy|DB Learn)\b/;
// UI consistency: colours must come from design tokens in globals.css.
const rawHex = /#[0-9a-fA-F]{6}\b/;
const hexAllowed = new Set(["src/app/globals.css", "src/app/layout.tsx"]);

for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split("\n");
  lines.forEach((l, i) => {
    if (promises.test(l) && !/does not|do not|no |not /i.test(l)) add("P0", f, i + 1, `Outcome promise: ${l.match(promises)[0]}`);
    if (offBrand.test(l) && !/^\s*(\/\/|\*|\/\*)/.test(l)) add("P0", f, i + 1, `Unofficial product name: ${l.match(offBrand)[0]}`);
    if (hype.test(l) && !f.endsWith("check-content.mjs")) add("P1", f, i + 1, `Hype word: ${l.match(hype)[0]}`);
    if (rawHex.test(l) && !hexAllowed.has(f.replaceAll("\\", "/"))) add("P2", f, i + 1, `Raw colour ${l.match(rawHex)[0]} (prefer a token)`);
  });
}

const order = { P0: 0, P1: 1, P2: 2 };
findings.sort((a, b) => order[a.level] - order[b.level]);
for (const x of findings) console.log(`${x.level}  ${x.file}:${x.line}  ${x.msg}`);
const p0 = findings.filter((x) => x.level === "P0").length;
console.log(`\n${findings.length} finding(s), ${p0} P0.`);
process.exit(p0 ? 1 : 0);
