let Trie = require('./trie')
Trie = new Trie()

const tests = new Map()

tests.set({
  name: 'Single insert',
  exec: () => {
    Trie.insert('word')
    return Trie.contains('word')
  }
}, true)

tests.set({
  name: 'Multiple insert',
  exec: () => {
    Trie.insert(['several', 'words'])
    return [Trie.contains('several'), Trie.contains('words')]
      .reduce((acc, item) => acc && item, true)
  }
}, true)

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
