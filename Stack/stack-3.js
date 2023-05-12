class ArrayToStack {
    constructor() {
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(data){
        this.items.push(data)
    }

    pop(){
        if(this.isEmpty()){
            return "stack underflow"
        }else{
            return this.items.pop()
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("stack is empty")
        }else{
            console.log(this.items)
        }

    }
}

const stack = new ArrayToStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
stack.print()