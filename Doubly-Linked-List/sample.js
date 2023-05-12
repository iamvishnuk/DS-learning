class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LikedList {
    constructor() {
        this.head = null
        this.tail = null
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

    FirstDelet() {
        if (!this.head) {
            return
        } else if(this.head === this.tail) {
            this.head = this.head.next
            this.head.previous = null
        }
    }

    lastDelete(){
        if(!this.head){
            return
        }else if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.tail.previous.next = null
        }
    }

    addAtPostionAfter(target,value){
        const node = new Node(value)
        const curr = this.head
        while(curr){
            if(curr.value === target){
                node.next = curr.next
                curr.next = node
                node.previous = curr
                curr.next.previous = node
                return
            }
            curr = curr.next
        }
    }

    reverse(){
        let temp = this.tail 
        while(temp){
            console.log(temp.value)
            temp = temp.previous
        }
    }

    deletetheTarget(target){
        if(!this.head){
            return
        }else if(this.head.value === target){
            this.head = this.head.next
            this.head.previous = null
        }else if(this.tail === target){
            this.tail.previous.next = null
        }else{
            let temp = this.head
            while(temp){
                
            }
        }
    }

    print() {
        if (!this.head) {
            console.log("doubly linked list is empty")
        } else {
            let temp = this.head
            while (temp) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }

}


const list = new LikedList()

list.addLast(10)
list.addLast(20)
list.addLast(30)
// list.addAtPostionAfter(20,222)
list.print()
console.log("++++++++++++++++++++++")
list.reverse()