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
        this.size = 0
    }

    FirstAdd(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
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
        this.size++
    }

    addAtPostionAfter(target, value) {
        const node = new Node(value)
        if (this.head.value === target) {
            node.next = this.head.next
            this.head.next = node
        } else {
            let temp = this.head
            while (temp) {
                if (temp.value === target) {
                    node.next = temp.next
                    temp.next = node
                    return
                } else (
                    temp = temp.next
                )
            }
        }
    }

    addBeforePostion(target, value) {
        const node = new Node(value)
        if (this.head.value === target) {
            node.next = this.head
            this.head = node
        } else {
            let temp = this.head
            let prev = null
            while (temp) {
                if (temp.value === target) {
                    prev.next = node
                    node.next = temp
                    return
                } else {
                    prev = temp
                    temp = temp.next
                }
            }
        }
    }


    FirstDelete() {
        if (!this.head) {
            return null
        } else {
            this.head = this.head.next
        }
    }

    Display() {
        if (!this.head) {
            console.log("Linked list is empty")
        } else {
            let temp = this.head
            while (temp) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }


    lastDelete() {
        if (!this.tail) {
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


    deleteAtPostion(target) {
        if (this.head === target) {
            this.head = this.head.next
        } else {
            let temp = this.head
            while (temp.next) {
                if (temp.next.value === target) {
                    temp.next = temp.next.next
                    return
                }
                temp = temp.next
            }
            console.log("target not found")
            return
        }
    }

    insertAtIndex(index, value) {
        const node = new Node(value)
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeAtIndex(index) {
        console.log(this.size)
        if (index < 0 || index >= this.size) {
            console.log("there is no such postion")
            return
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let temp = this.head
            for (let i = 1; i < index; i++) {
                temp = temp.next
            }
            temp.next = temp.next.next
        }
    }

    arrToLinkedList(arr) {
        if (arr.length === 0) {
            return
        } else {
            let node = new Node(arr[0])
            this.head = node
            let temp = this.head
            for (let i = 1; i < arr.length; i++) {
                let newNode = new Node(arr[i])
                temp.next = newNode
                temp = newNode
            }
        }

    }

    reverseLinkedList() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }


    DeleteDuplicate() {
        if (!this.head) {
            console.log("Linked list is empty")
        } else {
            let temp = this.head
            while (temp.next) {
                if (temp.value === temp.next.value) {
                    temp.next = temp.next.next
                } else {
                    temp = temp.next
                }

            }
        }
    }




}

const list = new LinkedList()

list.LastAdd(10)
list.LastAdd(10)
list.LastAdd(10)
list.LastAdd(10)
list.LastAdd(20)
list.LastAdd(30)
list.LastAdd(30)
list.LastAdd(30)
list.LastAdd(30)
list.LastAdd(40)

console.log("========================")
list.DeleteDuplicate()

list.Display()







