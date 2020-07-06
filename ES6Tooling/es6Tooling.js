// the tools that we are about to go over is only important
// if we are building browser applications if we are using javascript in node 
// then we do not need to worry about these tools

// so what are these tools:
// when using modern JS we need 2 kinds of tools 
// a transpiler and a bundler

// A transpiler is the combination of 2 words translator and compiler
// basically its a tool that we give it our modern Js code and it will
// convert our JS code into code that all our browsers can understand

// earlier in the section we saw a glimpse of babel 
// this is an example of a very popular transplier for modern javascript

// Module bundler is responsible for combining 
// all of our JS file into a single file which we call the bundle

// there are many bundlers out there but the most popular one is 
// web pack so we give all our Javascript files to webpack
// Webpack will combine them all into a single file 
// it will minify our code by getting rid of all the white space and comments 
// then it will uglify our code which basically means it will shorten
// the name of our identifiers like classes, functions, objects and so on 
// this will reduce the size of the bundle that we will serve to the client 