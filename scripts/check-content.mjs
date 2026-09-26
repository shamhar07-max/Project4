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
// Design-system drift rules (see docs/ui-consistency-report.md).
const arbitrarySize = /text-\[[0-9.]+(rem|px)\]/;
const h3Weight = /text-h3 font-(extrabold|semibold)/;
const adHocSectionPad = /\bpy-(1[0-9]|2[0-9]) sm:py-/;
const wrongArrow = /ArrowUpRight/;
// chat-widget.tsx passes a literal hex to the MyChatBot API, which cannot read CSS variables.
const hexAllowed = new Set(["src/app/globals.css", "src/app/layout.tsx", "src/components/site/chat-widget.tsx"]);

for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split("\n");
  lines.forEach((l, i) => {
    if (promises.test(l) && !/does not|do not|no |not /i.test(l)) add("P0", f, i + 1, `Outcome promise: ${l.match(promises)[0]}`);
    if (offBrand.test(l) && !/^\s*(\/\/|\*|\/\*)/.test(l)) add("P0", f, i + 1, `Unofficial product name: ${l.match(offBrand)[0]}`);
    if (hype.test(l) && !f.endsWith("check-content.mjs")) add("P1", f, i + 1, `Hype word: ${l.match(hype)[0]}`);
    if (f.endsWith(".tsx")) {
      if (arbitrarySize.test(l)) add("P1", f, i + 1, `Ad-hoc font size ${l.match(arbitrarySize)[0]} (use text-body / text-body-sm)`);
      if (h3Weight.test(l)) add("P1", f, i + 1, "H3 must be font-bold");
      if (adHocSectionPad.test(l)) add("P2", f, i + 1, "Ad-hoc section padding (use section-pad / section-pad-compact)");
      if (wrongArrow.test(l)) add("P2", f, i + 1, "Use ArrowRight for internal links");
    }
    if (rawHex.test(l) && !hexAllowed.has(f.replaceAll("\\", "/"))) add("P2", f, i + 1, `Raw colour ${l.match(rawHex)[0]} (prefer a token)`);
  });
}

const order = { P0: 0, P1: 1, P2: 2 };
findings.sort((a, b) => order[a.level] - order[b.level]);
for (const x of findings) console.log(`${x.level}  ${x.file}:${x.line}  ${x.msg}`);
const p0 = findings.filter((x) => x.level === "P0").length;
console.log(`\n${findings.length} finding(s), ${p0} P0.`);
process.exit(p0 ? 1 : 0);
