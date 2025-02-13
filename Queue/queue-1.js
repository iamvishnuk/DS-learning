class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.front) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) {
      console.log("queue is empty");
      return;
    }
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
  }

  print() {
    if (!this.front) {
      console.log("Queue is empty");
      return;
    } else {
      let temp = this.front;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dequeue();

queue.print();
