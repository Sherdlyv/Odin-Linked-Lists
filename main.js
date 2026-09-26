class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

export class linkList {
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

        return actualNode.next = newNode;
        
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

    headSearch () {
        if (this.head === null) return undefined;

        return this.head;
        
    }

    tail () {
        if (this.head === null) return undefined;

        let actual = this.head;

        while(actual.next !== null) {
            actual =actual.next;
        }
        return actual;
    }

    at(index) {
         if (this.head === null) return undefined;

         let actual = this.head;
         let compt = 0;

         while (actual !== null) {
            if (index === compt) return actual;


            actual = actual.next;
            compt++;

         }

          return undefined;


    }

    pop () {
        if (this.head === null) return undefined;

        const delValue = this.head.value ;

        this.head = this.head.next;

        return delValue;
        
    }

    
}



