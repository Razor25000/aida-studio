const nextPkg = require('C:/dev/semgrep_tmp/opencode/aida-nextjs/node_modules/next/package.json');
console.log('Next version:', nextPkg.version);
const fs = require('fs');
const path = 'C:/dev/semgrep_tmp/opencode/aida-nextjs/node_modules/next/dist/build/index.js';
console.log('build file exists?', fs.existsSync(path));
const stat = fs.statSync(path);
console.log('build file size:', stat.size, 'modified:', stat.mtime);
