let Trie = require('./Trie')
Trie = new Trie()

const tests = new Map();

tests.set(() => {
  Trie.insert('word')
  return Trie.contains('word')
}, true)
tests.set(() => {
  Trie.insert(['several', 'words'])
  return [Trie.contains('several'), Trie.contains('words')]
    .reduce((acc, item) => acc && item, true)
}, true)

function TestNotPassedException(message) {
  this.message = message
  console.log(message)
}

for (const entry of tests) {
  console.log(entry[1])
  if (entry[0]() === entry[1]) {
    console.log('Passed!')
  } else {
    throw TestNotPassedException(`${entry[1]} result failed`)
  }
}

