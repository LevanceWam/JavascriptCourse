<h1 id=home>Javascript Course</h1>
<p>Welcome to the Javascript Tutorial!</p>
<p>Here I will be reviewing my JS skills and improve on them.</p>

<h3>About Javascript</h3>

<p>Javascript is one of the most popular and widely used languages in the world.</p>

<p>For a long time Javascript was only used in browsers used to build interactive webpages. Some people referred to it as a toy language.</p>

<p> Javascript was originally built to run in browser. Browsers have a JS engine to run this code. For example Firefox uses Spidermonkey and chrome uses v8. Node is a c++ program that includes Chrome's v8 engine. With this we can run JS code outside of a browser. So we can pass JS code to node and execute it. This allows us to build the backend for mobile and web applications.</p>

<p>ECMAScript is the defining standards or rules on how you write JS. v.1 was created in 1997 and in 2015
ES6 has came out and this version defined many new features for JS.</p>

 <p> Javascript is a dynamic language. This means we can set a variable to a number and then change it's type to a string.</p>


<h3>OOP:</h3>

<p> Object oriented programming (OOP), is a style of programming. Where we see a program as a collection of objects. They talk to each other to perform some functionality. A programming paradigm centered around objects rather than functions. OOP has been around since the 70s and unlike tools and frameworks that come and go.</p>

<p>OOP is still relevant today because it is not a programming tool or language. It is a style of programming or paradigm. There are several languages that support OOP such as C#, Java, Ruby, Python, Javascript, and more! </p>

<h4>Four Pillars of OOP</h4>

<p>A popular interview question concerns the four core concepts in object oriented programming. These concepts are Encapsulation, Abstraction, Inheritance, and Polymorphism. </p>

<p>Before we had OOP we had procedural programming, that divided a program into a set of functions. So we had data stored in a bunch of variables and function that operate on the data. This style is very simple and straight forward. This was later referred to as spaghetti code due to the problematic nature of functions breaking one another. OOP came to fix this problems. With OOP we combined a group of related variables and functions into a unit. That unot was later called an object, we refer to the variables as properties and the functions as methods.</p>

<h4>Encapsulation</h4>

<p>In OOP the grouping of related variables and functions that operate on them into object. This is what we call encapsulation. By following this we can have cleaner code and produce functions without parameters. Quote by Robert C Martin "The best functions are those with no parameters". The fewer the parameters the easier it is to maintain that funnction.</p>

<h4>Abstraction</h4>

<p>Allows us to hide some of the properties and methods from the outside of our objects. This also gives us a couple of benefits. First it will make the interface of those objects simpler. Using and understanding an object with fewer properties and methods is easier than an objeect with several properties and methods. The second benefit is that it helps reduce the impact of change. Imagine that we change the inner or private functions. None of the changes will leak to the outside because we don't have any code that touches these methods outside if their containing object. We can delete the method or change it's parameters, but none of these changes will impact the rest of the application code. Big take away with Abstraction we reduce the impact of change.</p>

<h4>Inheritance</h4>

<p>Inheritance is a mechanism that allows you to eliminate redundant code. Here's an example, think of html elements like textbox, dropdowns and etc. All of these elements have things in common. they have properties like hidden, inner html and methods of the sort. Instead of redefining all of those properties and methods for every kind of HTML element. We can define them once in a generic object.Give it an name and have other objects inherit these properties and methods. This is how inheritance helps us eliminate redundant code.</p>

<h4>Polymorphism</h4>

<p>Poly means many, morph means form. Together polymorphism means many forms. In OOP polymorphism is a technique that allows you to get rid of long if and else or switch and case statements. Back to the html element example. All of the objects mentioned should have the ability to be render on a page. But, how they are rendered is what is different from the others. With  OOP we can implement a render method in those objects and the render method will behave differently depending on the type of the object we are referencing.</p>

<h4>Benefits of OOP</h4>

<p>Using Encapsulation we group variables and functions together this way we can reduce complexity. Now we can reuse an object in different parts of a program, or in a different program.</p>

<p>With Abstraction, We hide the details and complexity and show only the essentials. This technique reduces complexity and also isolates the impact of changes in the code.</p>

<p> With Inheritance we eliminate redudant code</p>

<p>Finally with polymorphism we can refactor switch case statememts.</p>


<h2>Table of Contents</h2>
<li><a href='#section1'>Basics</a></li>
<li><a href='#section2'>Operators</a></li>
<li><a href='#section3'>Control Flow</a></li>
<li><a href='#section4'>Objects</a></li>
<li><a href='#section5'>Arrays</a></li>
<li><a href='#section6'>Functions</a></li>
<li><a href='#section7'>Prototypes</a></li>
<li><a href='#section8'>Classes</a></li>
<li><a href='#section9'>ES6 Tooling</a></li>


<h2 id=section1>Basics</h2>

<p>Let's talk about variables.</p>

<p>We use a <strong>variable</strong> to store data temporarily in the computers memory. We store that data somewhere and give that memory location a name. With this name, we can read the data at the location later. A variable is like a box what we put in the box is the value we assign to the variable in other words the variable. The label is the name of the box or in this case the name of a variable. Variables by default are undefined when we first create them and don't put information in it</p>

<p>Before ES6 we use to use var when we defined variables. But due to some issues caused by using var when ES6 was released we changed to let and const.</p>

<p>There are some rules when we are naming variables:</p>

<li>Cannot be a reserved keyword.</li>
<li>Should be meaningful.</li>
<li>Cannot start with a number.</li>
<li>No spaces or hypen.</li>
<li>Should use camel casing.</li>
<li>Are case-sensitive.</li>
<br>

<h4>Constants</h4>

<p>There are times we need our variables to keep the value the same. This is because it can cause a bug in the program.</p>

<p>To avoid this we use constant (const). We cannot reassign a value on constant.</p>

<p> let & constant vs var: </p>

<p>Before ES6 we use to declare variables with the keyword var. This brings out a certian amount of issues because var's scope was accessible in areas where it shouldn't be. Var is function scoped, this means that if we had a if block inside of a function. under normal circumstances the variable shouldn't be able to be called outside of the if block.</p>

<h4>Primitive and Reference Types</h4>

<p>In Javascript we have two types: Primitive and Reference.</p>

<p>Some Primitive are:</p>

<li>Strings</li>
<li>Number</li>
<li>Boolean</li>
<li>Undefined</li>
<li>Null</li>
<br>

```
<!-- undefined -->
indicates that a variable has not been assigned a value, or not declared at all.

<!-- null -->
is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object.
```

<p> If you need a laugh go <a href='https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined'>click me</a></p>

<p>Some Reference are:</p>

<li>Object</li>
<li>Arrays</li>
<li>Functions</li>
<br>

<a href="#home">Top</a>

<h2 id=section2>Operators</h2>

<p> In JS we have different types of Operators. Artihmetic, Assignment, Comparison, Logical, and  Bitwise operators. When we use these operators along with variables and constants we create expressions. Expressions can be used to implement logic and algorithms. An expression is something that produces a value.</p>

<p>Let's talk Equality Operators take a look at the code below.</p>

```
<!-- Strict Equality (Type + value) -->
console.log(1 === 1)

<!-- Loose Equality -->
console.log('2' == 2);
```

<p> In the code above we have the loose and strict equality operators. The important thing to notice that is the strict operator has === and the loose has ==. They are both used to compare values but have different ways they choose to go about that.</p>

<p> With the strict operator the it is comparing both the value and the type of the objects it is comparing. So this means even if the value is the same if the type doesn't match then it is false.</p>

<p>With the loose operator it doesn't care if the type of the values are different. The operator will look to the left and compare the type first. If the types do not match then it will convert the value type on the right to match the one on the left. After that then it will compare the values.</p>

<a href="#home">Top</a>

<h2 id=section3>Control Flow</h2>

<p>A refresher on loops:</p>

<p>In JS We have various kinds of loops. Loops are used when we want to repeat an action multiple times. Although they do the same thing differ when it comes to starting and ending them.</p>

<p>Types of loops:</p>

<li>For Loop</li>
<li>While Loop</li>
<li>Do While Loop</li>
<li>For In Loop</li>
<li>For Of Loop</li>
<br>

<strong>Caution!</strong>

<p> When we are writing loops we have to be mindful of infinite loops, loops that execute forever. If one of these are made this will crash your browser. Meaning you would have to close the browser in order to use the tab or browser. One of the most common loops in my opinion that this can happen to is the do-while and while loops. But, for loops are able to cause them as well.</p>

<p> Just a helpful tip. If you have nested loops and aren't the best or comfortable with them you should seperate them into seperate functions to make things a little easier.</p>

<a href="#home">Top</a>

<h2 id=section4>Objects</h2>

<p>What are objects:</p>

<p>Objects are collections of key values. So if we have properties we want to encapsulate them inside of an object. We can put anything inside of an object functions, numbers, arrays and plenty more.
when we have a function in the object it is called a method.</p>

<p>When we use an object it is not stored in the variable. The object is stored somewhere else in the memory and the address of the memory location is stored inside the memory variable</p>

<p> Value Types vs Reference Types:</p>

<p>In javascript we have 2 catergories of types.
On one side we have value types also known as primitives and on the other side we have reference types. Note that Primitives are copied by Value 
Objects are copied by their reference</p>

<p>Value types</p>
<li>Number</li>
<li>String</li>
<li>Boolean</li>
<li>Symbol</li>
<li>Undefined</li>
<li>Null</li>
<br>

<p>Reference types</p>
<li>Objects</li>
<li>Functions</li>
<li>Arrays</li>
<br>

<p>Garbage Collection:</p>
<p>In low level languages like c or c++, when creating an object we have to allocate memory to it and when we are done we have to reallocate the memory. But with JS we don't have this concept. When we create objects the memory is automatically allocated when we intialize the object. When we are done we don't have to deallocate the memory. JS engine has something called a garbage collector. This collector finds variables and const that are not being used anymore and deallocates the memory that was allocated them earlier. This happens behind the scenes and there is nothing we can do to have control over it.</p>

<a href="#home">Top</a>

<h2 id=section5>Arrays</h2>
<p>What are Arrays:</p>

<p>The Array Object let's us store multiple values in a single variable. We refer to the values as elements. Arrays enable us to iterate through them,
do basic math and so much more. Throughout this section we will learn some of the methods that come with arrays and how to use them correctly.</p>

<p>Methods used:</p>

<li>find()</li>
<li>reduce()</li>
<li>some()</li>
<li>every()</li>
<li>join()</li>
<li>pop()</li>
<li>shift()</li>
<li>unshift()</li>
<br>

<p>Callback Functions</p>

<p>Some methods use callback functions. Also known as predicates, the function is called back as a part of finding an element in this array. Callback functions accept up to 3 parameters/agruments.</p>

<a href="#home">Top</a>

<h2 id=section6>Functions</h2>

<p>Hoisting:</p>

<p>In Javascript we have something called hoisting. Hoisting is the process of moving function declarations to the top of the file. This is done automatically by the javascript engine that is running the code. (This could be a interview question)</p>

<p>Function Declarations are hoisted which means they raise to the top of the code.</p>

<p>Function Expressions are not hoisted, if we try to call it before it is declared we will get an error. This is because we are dealing with an expression a constant or a variable that is not intialized.</p>

<p>Scope</p>

<p>The scope of a variable or a constant determines where that variable or const is accessible. When we declare a variable with const or let. The scope of that variable is limited to the block in which they are defined.</p>

<p>Global variables are variables that are accessible everywhere in the code. We want to avoid defining global variables or constants this is consider bad pratice. This is because they are accesible everywhere and a function can accidentally change the value and this can lead to all kinds of bugs or issues.</p>

<p>Local variables are only accessible to the code block that they are defined in. They can not be called outside of the block they where declared in. If a global function with the same name as the local is called at the same time in the same code block the local variable will be the one that shows the results or declared in the function. This is because local variables and constants have higher precedence over global variables or constants.</p>

<p>Keyword This:</p>
<p>The keyword this references the object that is executing the current function.</p>

<a href="#home">Top</a>

<h2 id=section7>Prototypes</h2>

<h4>Classical vs Prototypical Inheritance</h4>
<p><strong>NOTE:</strong>  This is one of the topics for interview questions</p>

<p>Inheritance is one of the core concepts of OOP this enables an object to take on the properties and method of another object. This makes it easy to reuse code in different parts of an application.</p>

<h4>Classical Inheritance</h4>

<p> With classical inheritance we have the base classes (also known as super/parent class) that has child classes (also known as deprived/sub classes)  that inherit from the base class. We reference the relationship as a IS-A relationship. For example: if we have a parent class name shape and child class named cirlce we would say circle IS-A shape
this is the classical definition of Inhertiance 
but remember in Javascript we do not have classes</p>

 <p>Remember in Javascript we don't have classes, We have objects.</p>

<h4>Prototypical Inheritance</h4>

<p> A prototype is just a regular object in memory. Prototype is essentially a parent of another object. Every object in javascript except for the rootobject has a prototype or parent and objects inherits all the members we defined in its prototype.
</p>

<p>Every object that we create in javascript directly or indirectly inherits from the rootObject. This is because the rootObject is the base of all objects in javascript. rootObject does not have a prototype or parent. So in memory our objects reference the rootObject. So we have a single instance of rootObject in memory.</p>

<p>When we access a property or a method on a object 
Javascript engine first looks for that property or method. First on the object itself if it is not found
then it looks at the prototype for that object. So if it can not find that member it will look at the prototype of that object all the way up to the root object we called rootObject that is prototypical inheritance in action. When accessing a property or a method on an object. Javascript engine mocks up the prototype chain to find the target member. </p>

<h4>Multilevel Inheritance</h4>

<p>If we were to take a empty array and inspect its prototype property we will find some familiar methods.
These methods are defined in a object we are going to call rootArray and this object is the prototype of all arrays in javascript. So this is what is going on in the memory the empty array is being derived from rootArray, Then if we inspect the rootArray we find that it's prototype is rootObject.</p>

<p>This is what we can visualize: emptyArray -> rootArray -> rootObject. The emptyArray derives from the rootArray and the rootArray derives from the rootObject. This is known as multilevel inheritance. </p>

<p>If we were too create object using a custom constructor. The custom constructor would be the prototype of all of the objects made from that constructor. Let's call it rootConstr, and everytime the constructor is called the object created will have it's prototype property set to the rootConstr. In other words objects created by a given constructor will have the same prototype. The same goes for all arrays created by the array constructor will have the same prototype.</p>

<p>Again let's visualize what is going on in the memory constructorObject -> rootConstr -> rootObject, so the constructor's object is inheriting from the rootConstr which is inheriting from the rootObject.</p>

<p>In javascript, we have the ability to modify already existing objects in javascript. This is very tempting We do not do this.</p>

<p>Do Not modify objects you Do Not own! We understand that javascript is a dynamic language it makes it easy to add properties and methods to that existing object
but that doesn't mean that we should modify the built in objects. So don't overwrite methods, don't add new methods or properties and don't remove exisiting properties and methods because somewhere else in a library you might be using, there might be code that is dependent on those methods in the built in objects
so if you modify the built in objects you will create all sorts of issues.</p>

<a href="#home">Top</a>

<h2 id=section7>Prototypical Inheritance</h2>

<h4>When to use inheritance ?</h4>

<p>While inheritance is a great tool for solving the problem of code reuse we have to be really careful About using it. This is because it can make your source code complex and fragile so don't use inheritance just for the sake of using it especially in small projects. Remember keep it simple and stupid. We want to start with simple objects and if we see that a number of them share similar features. Then we should encapsulate those features inside of a generic object and use inheritance.
But remember we have another solution than inheritance Composition. Composition helps use avoid using inhertiance hierachries which are very fragile.</p>

<h4>Important</h4>

<p> Avoid creating inheritance hierarchies because they are very fragile. If you want to use inheritance keep it to one level do not go more than one level above inheritance. There is a famous saying that goes, "Favor Composition over Inheritance" with composition instead of having the complex hierarchy we can compose a few objects together to create a new object this technique gives us great flexibility.
</p>

<a href="#home">Top</a>

<h2 id=section8>Classes</h2>

<p>Classes are basically constructor functions.</p>

<p>In es6 there is a new way to create objects and implement inheritance by using classes. These classes are not like the classes we have in languages like c# and java. Javascript classes essentially syntactic sugar over prototypical inheritance that's why in the last section we had to learn prototypical inheritance the way that we did so we can understand how prototypical inheritance works before we look at the new syntax which is cleaner and simpler</p>

<p>We can define classes using a declaration or a expression syntax. But, unlike functions, class declarations or class expressions are not hoisted so we cannot create a object before declaring a class.</p>

<h4>Strict mode:</h4>

<p>in JS we have something called strict mode. when we enable this mode. Javascript engine will be more sensitive so it will do more error checking. If there are errors that silently fail its going to turn them into exceptions it will also change the behavior of the keyword 'this' in functions to enable it at the top of the page write 'use strict'. </p>

<p>By enabling strict mode if you call a method as a function "this". By defaut "this" will no longer point to the global object it will be set to undefine. The reason for this is to prevent us from accidently modifying the global object because that is bad practice.</p>

<p>In ES6 classes by default are in strict mode. Javascript engine will always excute the body of this class on the strict mode. This will prevent us from accidently modifying the global object.</p>

<h4>Private methods and properties:</h4>

<p> In ES6 we have 2 ways of making methods and properties symbols and weakmaps</p>

<p>In ES6 we have a new primitive type called symbol. Symbol is a function we call to generate a symbol which is essentially a unqiue indentifier. So, everytime we call this function we get a new unqiue identifier. If we compare a symbol to a symbol we will get false because they are not the same.</p>

<p>An interesting thing to note about symbols is that they are kind of private. What I mean by that is that the properties and methods are essentally part of the object and are accessible from the outside. But accessing them is hard and awkward. </p>

<p>Also in ES6 we have weakmaps, a weakmap is essentially a dictionary where keys are objects and values can be anything. The reason they are called weakmaps is because the key are weak. So if there is no reference to these keys they will be garbage collector</p>

<p> WeakMaps give us better protection than symbols. There is no way to access private members implemented using WeakMaps from the outside of an object. </p>

<a href="#home">Top</a>

<h2 id=section9>ES6 Tooling</h2>

<p>Up until this point we have been writing our code in single files. When it comes to working in real world applications we do not do this. We do not want to have javascript files with hundreds or thousands lines of code. It makes it hard to maintian so we should split the code into multiple files and we call each of these files module this gives us a number of benefits.</p>

<p>First, is that we can increase the maintainabitily of our application because our code is better organized. Second, is that we get to reuse one or more of these modules in different parts of an application or in different applications. Third, is that we abstract code so we can apply the abstraction prinicple which means we can hide some of the complexity in a module and expose the essentials.</p>

<h4>History of Modules in Javascript:</h4>

<p>In ES5 we didn't have the concept of modules. So different solutions emerged to solve this problem smart developers in the community introduced new syntaxes to define modules. We refer to these syntaxes as modules formats some of these modules are AMD (Asynchronous Module Definition) used in browser applications, CommonJs used in node, UMD (Universal Module Definition) used in both browser and node, and finally ES6 modules. AMD and UMD are mainly used to maintain legacy applications.</p>

<p>In this section I learned about exporting and importing modules from diferent files a skill that is very important in my growth as a web developer. I have also learned about Babel and webpack which will be discussed in further detail below</p>

<h4>Babel:</h4>

<p>Babel is a transpiler, A transpiler is the combination of 2 words translator and compiler. Basically it's a tool that we give it our modern Js code and it will convert our JS code into code that all our browsers can understand</p>

<h4>Webpack:</h4>

<p>Webpack is a bundler, A Module bundler is responsible for combining all of our JS file into a single file which we call the bundle. There are many bundlers out there but the most popular one is web pack so we give all our Javascript files to webpack. Webpack will combine them all into a single file and will minify our code by getting rid of all the white space and comments. Then it will uglify our code which basically means it will shorten the name of our identifiers like classes, functions, objects and so on. This will reduce the size of the bundle that we will serve to the client. </p>

<a href="#home">Top</a>