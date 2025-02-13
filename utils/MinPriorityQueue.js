class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new element into the heap
  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Remove and return the smallest element
  dequeue() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // Move last element to root
    this.heapifyDown();
    return min;
  }

  // Get the smallest element without removing
  front() {
    return this.isEmpty() ? null : { element: this.heap[0] };
  }

  // Restore heap property after inserting
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.leftChild(index) < this.heap.length) {
      let smallerChild = this.leftChild(index);
      if (
        this.rightChild(index) < this.heap.length &&
        this.heap[this.rightChild(index)] < this.heap[smallerChild]
      ) {
        smallerChild = this.rightChild(index);
      }

      if (this.heap[index] <= this.heap[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

module.exports = { MinPriorityQueue };
