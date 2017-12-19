const Trie = require('./Trie')()

const tests = new Map();

tests.set(() => Trie.insert('word'), Trie.contains('word'))
tests.set(() => Trie.insert(['several', 'words'],
  [Trie.contains('several'), Trie.contains('words')]
  .reduce((acc, item) => acc && item, true)

const TestNotPassedException = (message) => {
  this.message = message
  console.log(message)
}

for (const entry of tests) {
  if (entry[0]() === entry[1]) {
    console.log('Passed!')
  } else {
    throw new TestNotPassedException(`${entry[1]} result failed`)
  }
}

