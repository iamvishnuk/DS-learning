class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    firstAdd(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next  = this.head
            this.head = node
        }
    }

    Display(){
        if(!this.head){
            console.log("Linked list is empty")
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value)
                temp = temp.next
            }
        }
    }


}

let list = new LinkedList()

list.firstAdd(10)
list.firstAdd(20)
list.firstAdd(30)

list.Display()