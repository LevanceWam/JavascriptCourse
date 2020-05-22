<h1 id=home>Javascript Course</h1>
<p>Welcome to the Javascript Tutorial!</p>
<p>Here I will be reviewing my JS skills and improve on them.</p>

<h3>About Javascript</h3>

<p>Javascript is one of the most popular and widely used languages in the world.</p>

<p>For a long time Javascript was only used in browsers used to build interactive webpages. Some people referred to it as a toy language.</p>

<p> Javascript was originally built to run in browser. Browsers have a JS engine to run this code. For example Firefox uses Spidermonkey and chrome uses v8. Node is a c++ program that includes Chrome's v8 engine. With this we can run JS code outside of a browser. So we can pass JS code to node and execute it. This allows us to build the backend for mobile and web applications.</p>

<p>ECMAScript is the defining standards or rules on how you write JS. v.1 was created in 1997 and in 2015
ES6 has came out and this version defined many new features for JS.</p>

<h2>Table of Contents</h2>
<li><a href='#section1'>Basics</a></li>
<li><a href='#section2'>Operators</a></li>
<li><a href='#section3'>Control Flow</a></li>

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

<h4>Primitive and Reference Types</h4>

<p>In Javascript we have two types: Primitive and Reference.</p>

<p>Some Primitive are:</p>

<li>Strings</li>
<li>Number</li>
<li>Boolean</li>
<li>Undefined</li>
<li>Null</li>
<br>

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

<a href="#home">Top</a>
