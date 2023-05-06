class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    addLast(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
    }

    deleteDuplicate(target){
        let curr = this.head
        while(curr !== null){
            if(curr.value === target){
                // remove the target in the head node
                if(curr === this.head){
                    this.head = this.head.next 
                    this.head.previous = null
                } else {
                    // Remove non-head node
                    curr.previous.next = curr.next;
                    if (curr.next != null) {
                        curr.next.previous = curr.previous;
                    }
                }
            }
            curr = curr.next
        }
    }

    display(){
        let temp = this.head
        if(!this.head){
            console.log("list is empty")
            return
        }
        while(temp){
            console.log(temp.value)
            temp = temp.next
        }
    }
}

const link = new LinkedList()
link.addLast(10)
link.addLast(10)
link.addLast(20)
link.addLast(10)
link.addLast(10)
link.addLast(30)
link.addLast(10)
link.addLast(40)
link.addLast(10)
link.addLast(10)
link.display()
console.log("Linked list after delete the the duplicated elements")
link.deleteDuplicate(10)
link.display()
