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

    lastAdd(value) {
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

    reverseLinkedList(){
        if(!this.head){
            return
        }else{
            let curr = this.head
            let prev = null
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
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


let list = new LinkedList()
list.lastAdd(10)
list.lastAdd(20)
list.lastAdd(30)
list.lastAdd(40)
list.lastAdd(50)
list.print()
console.log("============")
list.reverseLinkedList()
list.print()