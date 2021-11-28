const { exec } = require('child_process');

const programPath = 'C:\\Software\\Bandizip\\Bandizip.exe'

exec(programPath, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: \n${stdout}`);
  console.error(`stderr: \n${stderr}`);
})