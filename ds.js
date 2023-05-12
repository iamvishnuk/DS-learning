class Stack {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }
    
    print(){
        if(this.isEmpty()){
           console.log("Stack is empty")
        }else{
            console.log(this.items)
        }
    }
}

const stack = new Stack()
stack.print()