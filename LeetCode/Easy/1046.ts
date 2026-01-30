// 1046. Last Stone Weight

function lastStoneWeight(stones: number[]): number {
  const heap = new MaxHeap(stones);

  while (heap.size >= 2) {
    let firstLargest = heap.extractMax();
    let secondLargest = heap.extractMax();

    if (firstLargest !== secondLargest) {
      heap.insert(firstLargest - secondLargest);
    }
  }

  return heap.size === 0 ? 0 : heap.peek();
}

class MaxHeap {
  heap: number[] = [];
  size: number = 0;

  constructor(nums: number[]) {
    for (let n of nums) {
      this.insert(n);
    }
  }

  insert(val: number) {
    this.heap.push(val);
    this.size++;
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax(): number {
    const max = this.peek();
    this.removeMax();
    return max;
  }

  peek() {
    return this.heap[0];
  }

  private removeMax() {
    if (this.size === 1) {
      this.size--;
      this.heap.pop();
      return;
    }

    this.heap[0] = this.heap.pop()!;
    this.size--;
    this.heapifyDown(0);
  }

  private heapifyUp(index: number) {
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      [this.heap[index], this.heap[this.parent(index)]] = [
        this.heap[this.parent(index)],
        this.heap[index]
      ];

      index = this.parent(index);
    }
  }

  private heapifyDown(index: number) {
    let largest = index;
    const left = this.leftchild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest]
      ];
      this.heapifyDown(largest);
    }
  }

  private leftchild(i: number) {
    return 2 * i + 1;
  }

  private rightChild(i: number) {
    return 2 * i + 2;
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
}

console.log('result ->', lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log('result ->', lastStoneWeight([1]));
