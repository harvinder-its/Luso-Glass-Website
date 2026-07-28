const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const destDir = path.join(__dirname, "..", "..", "blogs");

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found — run "npm run build" first.');
  process.exit(1);
}

fs.rmSync(destDir, { recursive: true, force: true });
fs.cpSync(outDir, destDir, { recursive: true });
console.log(`Copied ${outDir} -> ${destDir}`);
