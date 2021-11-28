const { exec } = require('child_process');

const ls = exec('ls -l ../')

ls.stdout.on('data', (chunk) => {
  console.log(`chunk：\n${chunk}`)
})

ls.stderr.on('data', (error) => {
  console.log(`error：\n${error}`)
})