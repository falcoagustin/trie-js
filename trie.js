class TrieNode {
  constructor() {
    this.children = {}
    this.isLeaf = false
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

  print() {
    for (let k in this.children) {
      console.log(k)
      this.children[k].print()
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
  }

  contains(word) {
    return this.root.contains(word)
  }

  print() {
    this.root.print()
  }
}

n = new Trie(['aalgo', 'algu'])
n.print()
console.log(n.contains('algo'))
console.log(n.contains('algu'))
console.log(n.contains('aldasd'))
console.log(n.contains('aalgo'))
