class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(data){
        const node = new Node(data)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }

    pop() {
        if(!this.top){
            console.log("Stack underflow")
            return
        }else{
            this.top = this.top.next
            return
        }
    }

    midDelete() {
        if (!this.top) {
            console.log("Stack is empty")
        } else {
            let mid = Math.floor(this.size / 2)
            // console.log(mid)
            let temp = this.top
            let prev
            while (mid > 0) {
                prev = temp
                temp = temp.next
                mid = mid - 1
            }
            prev.next = prev.next.next
        }
    }

    print(){
        if(!this.top){
            console.log("stack is empty")
            return
        }else{
            let temp = this.top
            while(temp){
                console.log(temp.data)
                temp = temp.next
            }
        }
    }
}


const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.midDelete()

stack.print()