const { spawn } = require('child_process');

const ls = spawn(`ls`, ['-la', '.'])

ls.stdout.on('data', (chunk) => {
  console.log(`chunk：\n${chunk}`)
})