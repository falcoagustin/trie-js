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
    const { letter, remainingLetters } = this.splitWord(word)
    if (letter in this.children) {
      this.children[letter].insert(remainingLetters)
    } else {
      if (letter) {
        this.children[letter] = new TrieNode()
        this.children[letter].insert(remainingLetters)
      } else {
        this.isLeaf = true
      }
    }
  }

  remove(word) {
    const { letter, remainingLetters } = this.splitWord(word)
    if (this.children[letter]) {
      const toDelete = this.children[letter].getChildren()
      if (Object.keys(toDelete).length === 0) {
        console.log('pasa')
        delete this.children[letter]
      } else {
        return this.children[letter].remove(remainingLetters)
      }
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
      this.root.remove(word)
    } else {
      throw 'Not in tree'
    }
  }

  contains(word) {
    return this.root.contains(word)
  }

  print() {
    this.root.print()
  }
}

n = new Trie(['aalgo', 'algu'])
// n.print()
console.log(n.contains('aalgo'))
n.remove('aalgo')
console.log(n.contains('aalgo'))
