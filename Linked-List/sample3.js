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

    firstAdd(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
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
            this.tail = node
        }
        this.size++
    }

    addAtPostsionAfter(target, value) {
        const node = new Node(value)
        let temp = this.head
        while (temp) {
            if (temp.value === target) {
                node.next = temp.next
                temp.next = node
                return
            }
            temp = temp.next
        }
        console.log("target Not found")
        return
    }

    addAtPostsionBefore(target,value){
        const node = new Node(value)
        if(!this.head) return null
        if(this.head.value === target){
            node.next = this.head
            this.head = node
        }else{
            let temp = this.head
            let prev
            while(temp){
                if(temp.value === target){
                    node.next = prev.next
                    prev.next = node
                }
                prev = temp
                temp = temp.next
            }
        }
    }

    FirstDelete(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
        }
    }

    lastDelete(){
        if(!this.head){                
            return
        }else{
            let temp = this.head
            while(temp.next.next){
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
        }
    }

    deleteAtPostsion(target){
        if(!this.head){
            return
        }
        if(this.head.value === target){
            this.head = this.head.next
        }else{
            let temp = this.head
            let prev = null
            while(temp){
                if(temp.value === target){
                    prev.next = temp.next
                    return
                }
                prev = temp
                temp = temp.next
            }
        }
    }

    insertAtIndex(index,value){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            console.log("give a valid index")
            return
        }
        if(!this.head){
            return null
        }
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let temp = this.head
            for(let i = 1; i < index  ; i++){
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node
            this.size++
        }
    }

    removeAtIndex(index){
        if(index < 0 || index >= this.size){
            console.log("enter a valid index")
            return
        }
        if(!this.head){
            console.log("linked list is empty")
        }
        if(index === 0){
            this.head = this.head.next
        }else{
            let temp = this.head
            for(let i = 1 ; i < index ; i++){
                temp = temp.next
            }
            temp.next = temp.next.next
            this.tail = temp
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


}

let list = new LinkedList()

list.addLast(10)
list.addLast(20)
list.addLast(30)
list.Display()
console.log("====================")

list.removeAtIndex(3)
// list.removeAtIndex(4,5)
// list.removeAtIndex(5,5)

  
list.Display()
