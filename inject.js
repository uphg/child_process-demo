const { exec } = require('child_process');

const userInput = '. && cat demo1.js'

exec(`ls ${userInput}`, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: \n${stdout}`);
})