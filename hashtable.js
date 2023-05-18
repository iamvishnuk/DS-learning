class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        if (typeof key === "string") {
            let total = 0
            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i)
            }
            return total % this.size
        }
        return key % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const sample = new HashTable(100)

sample.set("name", "vishnu")
sample.set("age", 22)
sample.set("placezz", "Kannur")
sample.get("age")

// sample.display()
// console.log(table)