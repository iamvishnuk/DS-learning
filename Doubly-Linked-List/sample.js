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

    addFirst(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.previous = node
            this.head = node
        }
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

    addAtPostionAfter(target,value){
        const node = new Node(value)
        let temp = this.head
        while(temp){
            if(temp.value === target){
                node.next = temp.next
                temp.next = node
                temp.next.previous = node
                node.previous = temp
                return
            }
            temp = temp.next
        }
    }


    display(){
        if(!this.head){
            console.log("linked list is empty")
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value)
                temp = temp.next 
            }
        }
    }

}

const link = new LinkedList()
link.addLast(10)
link.addLast(20)
link.addLast(30)
link.addLast(40)
link.addLast(50)
link.addAtPostionAfter(50,444)
link.display()