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


    
}



