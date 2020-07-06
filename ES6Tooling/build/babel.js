// in order to install the tools we talked about in the previous file we need node
// at this point we dont need to know node because we are not 
// programming with it all we need that comes with node is NPM (node package manager)

// NPM is a tool we use to install 3rd party library and tools 
// first thing we need to do is intialize the node project in the folder 
// we do that by typing "npm init --yes" in terminal

// what this command does is it creates a file in this folder called package.json
// which is an identification for our application

// now lets install babel

// we have to install 3 packages
// to install a package we type npm i (i is short for install)
// we use the @ symbol to specify the version number 

// npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1

// babel cli is babels command line interfaceis the tool that we run from the command line 
// like npm so we would run it from the command line and give 
// it the name of our JS file and then it will convert or compile that JS code

// the second package babel-core is basically the core of babel
// where all the logice for transpiring code is implemented 

// last is babel-preset
// in babel we have a plugin for every new JS feature starting from ES6
// so lets say we want to use let and const in ES6 there is a plugin for that
// if we want to use arrow functions in ES6 there is a plugin for that 
// in order to give ourselves some flexibility this preset is basically 
// the combination of all these plugins so it understands new features in JS 
// starting from ES6

// finally we need to supply a flag at the end of the command above  --save-dev
// this means we are going to install these as development dependencies so they are not going to be apart of our dependencies  
// they are not going to be part of the application
// they are not going to be deployed to the production. 
// they are purely on the development machine

// now if we look at our folder all of the packages has been installed 
// lets write some basic ES6 code

const x = 1;

// now lets use babel to convert this code so that all browsers can understand 
// first we go to package.json
// in the script section delete what we have for test (don't worry about it)
// we are going to add a new script
