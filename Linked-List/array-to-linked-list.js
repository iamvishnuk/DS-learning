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

    arrayToLinkedList(arr) {
        if (arr.length === 0) {
            // console.log("legth of the array is zero")
            return
        } else {
            const node = new Node(arr[0])
            this.head = node
            let temp = this.head
            for (let i = 1; i < arr.length; i++) {
                let newNode = new Node(arr[i])
                temp.next = newNode
                temp = temp.next
                this.tail = temp
            }
            console.log(this.head)
            console.log(this.tail)
        }
    }

    print() {
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

const linkedlist = new LinkedList()

let arr = [1,2]

linkedlist.arrayToLinkedList(arr)
linkedlist.print()