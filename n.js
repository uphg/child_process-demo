const { fork } = require('child_process');

const n = fork('./child.js')

n.on('message', function(msg) {
  console.log('父进程得到值')
  console.log(msg)
})

// n.send({ hello: 'world' })
