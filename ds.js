class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    push(data) {
        this.items.push(data)
    }

    pop() {
        if (this.isEmpty()) {
            console.log("stack underflow")
        } else {
            this.items.pop()
        }
    }

    deleteMid() {
        if (this.isEmpty()) {
            console.log("stack underflow")
        } else {
            let mid = Math.floor(this.items.length / 2)
            for (let i = 0; i < mid; i++) {
                let deletedItem = this.items.pop()
                newStack.items.push(deletedItem)
            }
            this.items.pop()
            let length = newStack.items.length
            for (let j = 0; j < length; j++) {
                let popedItem = newStack.items.pop()
                this.items.push(popedItem)
            }
        }
    }


    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
        } else {
            console.log(this.items)
        }
    }
}

const stack = new Stack()
const newStack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
console.log(stack)
console.log("====================")
stack.deleteMid()
console.log(stack)
console.log(newStack)
