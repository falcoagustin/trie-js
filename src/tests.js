const tests = require('./tests/index')

function TestNotPassedException(message) {
  this.message = message
  console.log(message)
}

for (const entry of tests) {
  if (entry[0].exec() === entry[1]) {
    console.log('Passed!')
  } else {
    throw TestNotPassedException(`${entry[0].name} result failed`)
  }
}
