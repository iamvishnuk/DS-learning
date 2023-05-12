class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    arrayToStack(arr) {
        if (arr.length === 0) return
        const node = new Node(arr[0])
        this.top = node
        for (let i = 1; i < arr.length; i++) {
            let newNode = new Node(arr[i])
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop() {
        if (!this.top) {
            console.log("stack underflow");
            return;
        } else {
            this.top = this.top.next
            return;
        }
    }


    print() {
        if (!this.top) {
            console.log("stack is empty")
            return
        } else {
            let temp = this.top
            while (temp) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }



}

const stack = new Stack()
const arr = [1, 2, 3, 4, 5]
stack.arrayToStack(arr)
stack.pop()
stack.print()