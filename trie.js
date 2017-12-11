class TrieNode {
  constructor() {
    this.letter = ''
    this.children = {}
    this.isLeaf = false
  }

  insert(word) {
    const letter = word.charAt(0)
    const remainingLetters = word.substr(1, word.length)
    if (letter in this.children) {
      this.children[letter].insert(remainingLetters)
    } else {
      if (letter) {
        this.letter = letter
        this.children[letter] = new TrieNode()
        this.children[letter].insert(remainingLetters)
      } else {
        this.isLeaf = true
      }
    }
  }

  // remove(word) {
  //   const letter = word.charAt(0)
  //   const remainingLetters = word.substr(1, word.length)
  //   if (!letter && this.isLeaf) {
  //     delete this
  //   } else {
  //     if (!letter) {
  //       return
  //     } else {

  //     }
  //   }
  // }
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
    this.root.remove(word)
  }
}

n = new Trie(['algo', 'algu'])
