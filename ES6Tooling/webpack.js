// important note the version of webpack we are trying to download is not longer availiable 
// so I will continue to write the notes 

// in the last file where we learned about babel 
// was purely for demonstration
// it is not the workflow we would use when building real world applications

// Let's take a look at the workflow we should be using on a day to day basis

// we will be working in the webpack folder this will be to record the notes 

// once the folder is created we need to open it in terminal and type the following command:

// "npm install -g webpack-cli@2.0.14"

// -g is short for global
// we are going to install webpack cli globally so we can access it in every project
// remember that @ is to define the version we want to use so for this example we are going with a older version 
// type sudo in front if you have permissions that stop you from downloading the package globally

// now that we have the packager downloaded
// in the project folder (for me it is webpack-demo ) type this command in terminal:

// "webpack-cli init"

// webpack cli is going to ask us a lot of questions and based on these
// it will create a web pack configuration file 

// the answers are only for this project

// Q1 will your application have mutiple bundles: we put no
// Q2 which module will be first to enter the application: ./src/index
// Q3 which folder will your generated bundles be in: just hit enter to accept the default 
// Q4 are you going to use this in production: no
// Q5 will you be using ES2015: yes (by anwsering yes this will automatically install babel to transpire our code)
// Q6 will you use the below CSS solution: no
// Q7 if you want to bundle your css files, what will you name the bundle: hit enter to skip
// Q8 name your 'webpack.[name].js' [default: 'config']: just hit enter

// now it will install a couple of packages