class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addFirst(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.previous = node
            this.head = node
        }
    }

    addLast(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
    }

    firstDelete() {
        if (!this.head) {
            console.log("Doubly linked list is empty")
        } else {
            this.head = this.head.next
            this.head.previous = null
        }
    }

    LastDelete() {
        if (!this.head) {
            console.log("linked List is empty")
        } else {
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.tail.previous.next = null
            }
        }
    }

    AddAtPostionAfter(target, value) {
        const node = new Node(value)
        if (!this.head) {
            console.log("empty")
        } else {
            let temp = this.head
            while (temp) {
                if (temp.value === target) {
                    node.next = temp.next
                    temp.next = node
                    temp.next.previous = node
                    node.previous = temp
                    return
                }
                temp = temp.next
            }
            console.log("match is not found")
        }
    }

    deletePostion(target) {
        if (!this.head) {
            console.log("linked list is empty")
            return
        } 
        if(this.head.value === target){
            this.head = this.head.next
            this.head.previous = null
        }else if(this.tail.value === target){
            this.tail.previous.next = null
        }else {
            let temp = this.head
            while (temp) {
                if (temp.value === target) {
                    // temp.next = temp.next.next
                    // temp.next.previous = temp
                    temp.previous.next = temp.next
                    temp.next = temp.previous
                }
                temp = temp.next
            }
        }
    }

    Display() {
        if (!this.head) {
            console.log("Doubly Linked List is empty")
            return
        } else {
            let temp = this.head
            while (temp) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }
}


const list = new LinkedList()

list.addLast(10)
list.addLast(20)
list.addLast(30)
list.addLast(40)
list.Display()
console.log("=================")

list.deletePostion(10)

list.Display()
