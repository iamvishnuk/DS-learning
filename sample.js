class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let arr = [13,23,32]

class ListedList {
    constructor() {
        this.head = null
        this.tail = null
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

    LastAdd(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node 
            this.tail = node
        }
    }

    DispayLinkedList(){
        if(!this.head){
            console.log("No data")
        }else{
            let temp = this.head
            while(temp) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }

    AddAtPositionAfter(value,target){
        const node = new Node(value)
        if(this.head.value === target){
            node.next = this.head
            this.head = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.value === target){
                    node.next = temp.next
                    temp.next = node 
                    return
                }else{
                    temp = temp.next
                }
            }
        }
    }

    AddAtPostionBefore(value,target){
        const node = new Node(value)
        if(this.head.value === target){
            node.next = this.head
            this.head = node
        }else{
            let temp = this.head
            let prev = null
            while(temp){
                if(temp.value === target){
                    node.next = temp
                    prev.next = node
                }else{
                    prev = temp
                    temp = temp.next
                }
            }
        }
    }

    DeleteFirst(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
        }
    }

    DeleteLast(){
        if(!this.head){
            return null
        }else{
            let temp = this.head
            while(temp.next.next){
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
        }
    }

}

const obj = new ListedList()
obj.FirstAdd(30)
obj.FirstAdd(40)
obj.DeleteFirst()
obj.DispayLinkedList()