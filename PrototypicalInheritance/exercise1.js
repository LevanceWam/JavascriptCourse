// for this exercise we need to create 2 objects 
// one called Html element
// the other is HtmlSelect element which represents a drop down list
// we have prototypical inheritance we have htmlSelectElement and its parent which is htmlElement
// lets figure out how we are going to make them behave

// for htmlElement:
// we have 1 method called click that belongs in here
// in the prototype we have another method called focus
// so we need to have one instance method and one prototypical method 

// Next is htmlSelectElement:
// in the constuctor we can optionally pass an array of items but we do not have too
// if we do not pass anything it will be intialize as an empty array
// inside of the function we have:
// an empty array if no array was passed 
// we aslo have too methods 
// addItem and removeItem
// when addItem is called we should be able to add the items 
// when removeItem is called it deletes the item in the array

// The important part here is that the htmlSelectElement inherits from the htmlElement
// this prototype is an instance of htmlElement object
// remember our htmlElement object has two methods click which is the instance or own method 
// and the other is focus which is the prototype method

// we are not allowed to use the extend function we created earlier
// our challenge is to set the prototype for the htmlSelectElement manually
// we need to set it to an instance of html object element
// because the click method is on the instance 
// so if we set the prototype of htmlselectelement to the prototype of html elemen
// we will only get the focus method because it is defined on the prototype

// myAttempt
function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement(array = []) {
    this.items = array;

    this.additem = function (...items) {
        this.items.push(...items);
    }

    this.removeItem = function (item) {
        let element = this.items.indexOf(item);
        this.items.splice(element, 1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();