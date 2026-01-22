// 703. Kth Largest Element in a stream

class KthLargest {
  private k: number;
  private nums: number[];

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }

  add(val: number): number {
    let i = 0;

    while (i < this.nums.length && this.nums[i] > val) {
      i++;
    }

    this.nums.splice(i, 0, val);

    if (this.nums.length > this.k) {
      this.nums.pop();
    }

    return this.nums[this.k - 1];
  }
}

class KthLargestHeapSolution {
  private heap: number[] = [];
  private k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (let n of nums) {
      this.add(n);
    }
  }

  add(val: number): number {
    this.insert(val);

    if (this.heap.length > this.k) {
      this.removeMin();
    }

    return this.heap[0];
  }

  private insert(val: number) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  private removeMin() {
    if (this.heap.length === 1) {
      this.heap.pop();
      return;
    }

    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
  }

  private heapifyUp(index: number) {
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
    const left = this.left(index);
    const right = this.right(index);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index]
      ];
      this.heapifyDown(smallest);
    }
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private left(i: number) {
    return 2 * i + 1;
  }

  private right(i: number) {
    return 2 * i + 2;
  }
}
