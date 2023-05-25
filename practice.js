class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    min(root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root,value) {
        if(root === null) {
            return root
        } else {
            if(value < root.value) {
                this.left = this.deleteNode(root.left, value)
            } else if(value > root.value) {
                this.right = this.deleteNode(root.right, value)
            } else {
                if(!root.left && !root.right) {
                    return null
                }
                if(!root.right) {
                    return root.left
                } else if(!root.left) {
                    return root.right
                } 
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }
}