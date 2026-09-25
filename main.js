class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class linkList {
    constructor () {
        this.head = null;

    }

     append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;

        }

        let actualNode = this.head ;
        while (actualNode.next !== null) {
             actualNode = actualNode.next;
        }
        
    }

    prepend (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size () {
        if (this.head === null) {
            return 0;
        }

        let actual = this.head;
        let total = 1;

        while (actual.next !== null) {
            actual = actual.next;
            total++;

        }
        return total;
    }

    
}



