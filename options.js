const { execFile } = require('child_process')

const options = {
  cwd: 'C:\\'
}

execFile(`ls`, ['-la', '.'], options, (error, stdout) => {
  console.log(`stdout: \n${stdout}`);
})