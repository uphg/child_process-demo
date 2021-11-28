const util = require('util')
const { exec } = require('child_process');

const exec2 = util.promisify(exec)

exec2('ls -l ../').then(({ stdout, stderr }) => {
  console.log(`stdout: \n${stdout}`);
  console.error(`stderr: \n${stderr}`);
})