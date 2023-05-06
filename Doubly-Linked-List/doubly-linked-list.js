class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}


class Linkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }


    AddFirst(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.previous = node
            this.head = node
        }
    }


    AddLast(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
    }


    FirstDelete() {
        if (!this.head) {
            return null
        } else {
            this.head = this.head.next
            this.head.previous = null
        }
    }


    lastDelete() {
        if (!this.head) {
            return null;
        } else {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.previous;
                this.tail.next = null;
            }
        }
    }





    addAtPos(pos, value) {
        const node = new Node(value)
        let temp = this.head
        while (temp) {
            if (temp.value == pos) {

                node.next = temp.next
                temp.next = node
                temp.next.previous = node
                node.previous = temp

            }
            temp = temp.next
        }

    }


    deletePos(target) {
        let temp = temp.next
        while (temp.next.next) {
            if (temp.value == target) {

            }
        }
    }






    print() {
        if (!this.head) {
            return null
        } else {
            let temp = this.head
            while (temp) {
                console.log(temp.value);
                temp = temp.next
            }
        }
    }


}


const list = new Linkedlist()

list.AddFirst(30)
list.AddFirst(20)
list.AddFirst(10)

list.AddLast(40)
list.AddLast(50)
list.AddLast(60)

// list. lastDelete()


list.addAtPos(10, 444)

list.print()