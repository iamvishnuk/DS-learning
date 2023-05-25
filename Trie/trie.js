class TireNode {
    constructor() {
        this.children = new Map()
    }
}

class Trie {
    constructor(str) {
        this.root = new TireNode()
        this.endSymbol = "*"
        this.populateSuffixTrie(str)
    }

    populateSuffixTrie(str) {
        for(let i = 0; i < str.length; i++) {
            this.insertSubstirng(i, str)
        }
    }

    insertSubstirng(index , str) {
        let node = this.root
        for(let i = index; i < str.length; i++) {
            const letter = str.charAt(i)
            if(!node.children.has(letter)) {
                node.children.set(letter, new TireNode())
            }
            node = node.children.get(letter)
        }
        node.children.set(this.endSymbol, null)
    }

    contain(str) {
        let node = this.root;
        for(let i = 0; i < str.length; i++) {
            const letter = str.charAt(i)
            if(!node.children.has(letter)) {
                return false
            }
            node = node.children.get(letter)
        }
        return node.children.has(this.endSymbol)
    }
}

const trie = new Trie("arun")
trie.populateSuffixTrie("arunima")
trie.populateSuffixTrie("arjun")
console.log(trie.root.children)
// console.log(trie.contain("run"))