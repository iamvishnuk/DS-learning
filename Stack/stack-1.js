class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(data){
        const node = new Node(data)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
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

stack.print()