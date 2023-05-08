class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    LastAdd(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    firstDelete() {
        return this.head ? this.head = this.head.next : false
    }
    lastDelete() {
        if (!this.head) {
            return null
        } else {
            let temp = this.head
            while (temp.next.next) {
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
        }
    }
    deleteTheTarget(target) {
        if (!this.head) {
            return null
        }
        if (this.head.value === target) {
            this.head = this.head.next
        } else {
            let temp = this.head
            let prev = null
            while (temp) {
                if (temp.value === target) {
                    prev.next = temp.next
                    return
                }
                prev = temp
                temp = temp.next
            }
        }
    }

    Print() {
        if (!this.head) {
            console.log("linked list is empty")
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

list.LastAdd(10)
list.LastAdd(20)
list.LastAdd(30)
list.Print()
console.log("========================")
list.deleteTheTarget(10)

list.Print()