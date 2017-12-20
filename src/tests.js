const tests = new Map()
require('./tests/index')(tests)

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
