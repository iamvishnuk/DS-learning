class Heap {
    constructor(array) {
        this.heap = []
        if (array) {
            this.BuildHeap(array)
        }
    }

    BuildHeap(array) {
        this.heap = array
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i)
        }

    }
    // used for shift down the large value
    shiftDown(currenIndex) {
        let endIndex = this.heap.length - 1
        let leftIndex = this.leftChild(currenIndex)
        while (leftIndex <= endIndex) {
            let rightIndex = this.rightChild(currenIndex)
            let indexToShift
            if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
                indexToShift = rightIndex
            } else {
                indexToShift = leftIndex
            }

            if (this.heap[indexToShift] < this.heap[currenIndex]) {
                [this.heap[indexToShift], this.heap[currenIndex]] = [this.heap[currenIndex], this.heap[indexToShift]]
                currenIndex = indexToShift
                leftIndex = this.leftChild(currenIndex)
            } else {
                return
            }
        }
    }
    // used for shift uping the small value
    shiftUp(currentIndex) {
        let parentIndex = this.parent(currentIndex)
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]]
            currentIndex = parentIndex
            parentIndex = this.parent(currentIndex)
        }
    }

    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        this.heap.pop()
        this.shiftDown(0)
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    sort() {
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.sorting(i)
        }
    }
    sorting(current) {
        [this.heap[0], this.heap[current]] = [this.heap[current], this.heap[0]]
        console.log(this.heap[current])
        this.heap.pop()
        this.shiftDown(0)
    }

    removeValue(value) {
        const indexToRemove = this.heap.findIndex(val => val == value)
        if (indexToRemove === -1) return
        [this.heap[indexToRemove], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[indexToRemove]]
        this.heap.pop()
        this.shiftDown(indexToRemove)
    }

    display() {
        console.log(this.heap)
    }

    peek() {
        return this.heap[0]
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    leftChild(i) {
        return (i * 2) + 1
    }
    rightChild(i) {
        return (i * 2) + 2
    }
}


const arr = [10, 9, 8, 7, 6, 5]

const heap = new Heap(arr)
// heap.insert(4)
// heap.insert(3)
// heap.insert(2)
// heap.insert(1)
heap.remove()
// heap.display()
heap.sort()
// heap.display()