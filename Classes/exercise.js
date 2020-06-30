// lets implement a stack
// a stack is a special kind of data stucture like
// like a physical stack or pipe

// this is how the stack works
// it has 2 essential operations
// push for adding an object in the box 
// and pop to remove the object on the top of this box
// so we can call the push method and push A and now A is in the slack
// the same with B we can push it and it is in the stack on top of A
// same with C and C is at the top of A & B

// unlike arrays we can not access objects in a stack using their index
// but we can always remove the object on the top by calling the pop method 
// so when we call pop method c will pop out of the stack
// if we call it again b will pop out

// my attempt

const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    peek() {
        if (_items.get(this).length === 0) throw new Error('Stack is empty');
        return _items.get(this)[_items.get(this).length - 1];
    }

    pop() {
        if (_items.get(this).length === 0) throw new Error('Stack is empty');
        return _items.get(this).pop();
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    get count() {
        return _items.get(this).length;
    }

}

const s = new Stack();