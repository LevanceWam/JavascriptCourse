// Continuing from the previous exercise 
// We want to extend htmlSelectElement and implement a render method
// when you call render on a HtmlSelectElement Object
// We should get the select element with the options from our array

// then create a HTMLImageElement 
// it should inherit from htmlElement so it can be clicked , focused 
// but it should have its own render method 
// when we create the HtmlImageElement we can optionally pass a src 

// when we inspect the element we should see the render method
// the src if we defined it if not then it should say undefined 
// in the prototype it inherits from a instance of htmlElement 
// it should have the click method as well as the focus method 

// using src we should be able to set the source and with render it should
// place it in a image tag

// after that create a array of elements and use a (for of) loop to iterate the elements and render them
// this is a good exercise for polymorpishm

function htmlElement() {
    this.click = function () {
        console.log('Clicked');
    }
}

htmlElement.prototype.focus = function () {
    console.log('focused');
}

function HtmlSelectElement(items = []) {

    this.items = items;

    this.additem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        return `
        <select>${this.items.map(item =>`
        <option>${item}</option>`).join('')}
        </select>`
    }
}

HtmlSelectElement.prototype = new htmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// now lets work on HtmlImageElement

function HtmlImageElement(src) {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new htmlElement;
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for (let element of elements)
    console.log(element.render());