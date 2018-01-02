let Trie = require('../trie')
Trie = new Trie()
const testmap = new Map()

testmap.set({
  name: 'Single insert',
  exec: () => {
    Trie.insert('word')
    return Trie.contains('word')
  }
}, true)

testmap.set({
  name: 'Multiple insert',
  exec: () => {
    Trie.insert(['several', 'words'])
    return [Trie.contains('several'), Trie.contains('words')]
      .reduce((acc, item) => acc && item, true)
  }
}, true)

module.exports = testmap
