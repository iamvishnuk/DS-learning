// create a class for each node wtihin the tree
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// create a class for the BST
class BinarySearchTree {
    // the tre has only on property which is its root node
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return
        }
        let current = this.root
        while(true) {
            if(value === current.value) return undefined
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode
                    return
                }
                current = current.left
            } else {
                if(current.rigth === null) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
        }
    }
    // The find method takes a value as parameter and iterates through the tree looking for that value
    // If the value is found, it returns the corresponding node and if it's not, it returns undefined
    find(value) {
        if (this.root === null) return false
        let current = this.root,
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
    // The contains method takes a value as parameter and returns true if the value is found within the tree
    contains(value) {
        if (this.root === null) return false
        let current = this.root,
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
}