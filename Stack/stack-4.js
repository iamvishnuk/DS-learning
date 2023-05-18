class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                return "Queue is empty";
            }

            while (this.stack1.length > 0) {
                const element = this.stack1.pop();
                this.stack2.push(element);
            }
        }

        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }

    print() {
        const combinedStack = [...this.stack2].reverse().concat(this.stack1);
        console.log(combinedStack.join(", "));
    }
}

const queue = new Queue();

// console.log(queue.isEmpty()); // Output: true
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(80);
// console.log(queue.size()); // Output: 4
queue.print(); // Output: 20, 10, 30, 80
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 10
// console.log(queue.peek()); // Output: 30