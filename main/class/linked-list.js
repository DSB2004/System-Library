class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.cur = null;
        this.counter = 0;
    }

    add(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.cur = node;
        } else if (this.cur !== this.tail) {
            node.next = this.cur.next;
            if (this.cur.next !== null) {
                this.cur.next.prev = node;
            }
            node.prev = this.cur;
            this.cur.next = node;
            this.cur = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.cur = node;
        }
        this.counter++;
    }

    isRightPossible() {
        return this.cur !== this.tail && this.cur.next !== null;
    }

    isLeftPossible() {
        return this.cur !== this.head && this.cur.prev !== null;
    }

    moveRight() {
        if (this.isRightPossible()) {
            this.cur = this.cur.next;
        }
    }

    moveLeft() {
        if (this.isLeftPossible()) {
            this.cur = this.cur.prev;
        }
    }

    isEmpty() {
        return this.head === null;
    }

    getCur() {
        if (this.cur !== null) {
            return this.cur.data;
        } else {
            return null;
        }
    }
}

module.exports = { LinkedList: LinkedList }

