const { execSync } = require('child_process');

const result = execSync('cat demo1.js')

console.log(`result:\n${result}`)