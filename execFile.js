const { execFile } = require('child_process');

const userInput = '.'

execFile(`ls`, ['-la', userInput], (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: \n${stdout}`);
})