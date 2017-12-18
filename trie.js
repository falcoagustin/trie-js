class TrieNode {
  constructor() {
    this.children = {}
    this.isLeaf = false
  }

  getChildren() {
    return this.children
  }

  removeChildren(key) {
    delete this.children[key]
  }

  splitWord(word) {
    return {
      letter: word.charAt(0),
      remainingLetters: word.substr(1, word.length)
    }
  }

  insert(word) {
    if (!word) return
    debugger
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

  remove(word, hasAlreadyRemoved) {
    const { letter, remainingLetters } = this.splitWord(word)
    if (!remainingLetters) {
      this.children[letter].remove(remainingLetters, true)
    } else {
      this.children[letter].remove(remainingLetters, hasAlreadyRemoved)
    }
    const toDelete = this.children[letter].getChildren()
    if (Object.keys(toDelete).length === 0) {
      delete this.children[letter]
    } else {
      this.isLeaf = false
    }
  }

  contains(word) {
    const { letter, remainingLetters } = this.splitWord(word)
    if (!letter) {
      return true
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
    if (typeof words === 'string') {
      words = [words]
    }
    words.map(word => this.insert(word))
  }

  insert(word) {
    this.root.insert(word)
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

n = new Trie(['algu', 'alguno'])
// console.log(n.contains('alguno'))
// n.remove('alguno')
// console.log(n.contains('alguno'))
n.print()
// console.log(n.contains('algu'))
