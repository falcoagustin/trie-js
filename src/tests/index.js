let Trie = require('../trie')
Trie = new Trie()

module.exports = function(testmap) {
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
}
