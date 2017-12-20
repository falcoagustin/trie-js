class TrieNode {
  constructor() {
    this.children = {}
    this.isLeaf = false
  }

  isFreeNode() {
    return Object.keys(this.children).length === 0
  }

  splitWord(word) {
    return {
      letter: word.charAt(0),
      remainingLetters: word.substr(1, word.length)
    }
  }

  insert(word) {
    if (!word) return
    const { letter, remainingLetters } = this.splitWord(word)
    if (letter in this.children) {
      this.children[letter].insert(remainingLetters)
    } else {
      this.children[letter] = new TrieNode()
      this.children[letter].insert(remainingLetters)
      if (!remainingLetters) {
        this.isLeaf = true
      }
    }
  }

  remove(word) {
    const { letter, remainingLetters } = this.splitWord(word)
    if (this.children[letter]) {
      if (!remainingLetters) {
        this.isLeaf = false
        return this.children[letter].isFreeNode()
      } else {
        if (this.children[letter].remove(remainingLetters)) {
          delete this.children[letter]
          return !this.isLeaf && this.isFreeNode()
        }
      }
    }
    return false
  }

  contains(word) {
    const { letter, remainingLetters } = this.splitWord(word)
    if (!remainingLetters) {
      return this.isLeaf
    }
    if (!(letter in this.children)) {
      return false
    }
    return this.children[letter].contains(remainingLetters)
  }

  print() {
    for (let k in this.children) {
      console.log(k)
      console.log(this.isLeaf)
      this.children[k].print()
    }
  }
}

class Trie {

  constructor(words) {
    this.root = new TrieNode()
    if (words) {
      this.insert(words)
    }
  }

  insert(words) {
    if (typeof words === 'string') {
      words = [words]
    }
    words.map(word => this.root.insert(String(word)))
  }

  remove(word) {
    if (this.root.contains(word)) {
      this.root.remove(word, false)
    } else {
      throw 'Not in trie.'
    }
  }

  contains(word) {
    return this.root.contains(word)
  }

  print() {
    this.root.print()
  }
}

module.exports = Trie
