// 215. Kth Largest Element in an Array

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new KthMinHeap(nums, k);
  return minHeap.peek();
}

class KthMinHeap {
  private heap: number[] = [];
  private k: number;

  constructor(nums: number[], k: number) {
    this.k = k;
    for (let num of nums) {
      this.add(num);
    }
  }

  add(value: number) {
    this.insert(value);
    if (this.heap.length > this.k) {
      this.removeMin();
    }
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUP(this.heap.length - 1);
  }

  peek() {
    return this.heap[0];
  }

  private removeMin() {
    if (this.heap.length === 1) {
      this.heap.pop();
      return;
    }

    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
  }

  private heapifyUP(index: number) {
    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
      [this.heap[index], this.heap[this.parent(index)]] = [
        this.heap[this.parent(index)],
        this.heap[index]
      ];

      index = this.parent(index);
    }
  }

  private heapifyDown(index: number) {
    let smallest = index;
    let leftIndex = this.left(index);
    let rightIndex = this.right(index);

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[index]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest]
      ];

      this.heapifyDown(smallest);
    }
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number) {
    return 2 * index + 1;
  }

  private right(index: number) {
    return 2 * index + 2;
  }
}
