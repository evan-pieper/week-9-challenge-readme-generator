// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [ 
    // Question for the project Title
    {
        type: "input",
        name: "title",
        message: "What would you like your project to be called? ",
        validate: validateInput,
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project: ",
        validate: validateInput,
    },

    // Table of Contents, andling this in the markdown.js

    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions required for this project: ",
        validate: validateInput,
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Describe this project's intended usage: ",
        validate: validateInput,
    },

    // Question for Credits
    {
        type: "input",
        name: "credits",
        message: "Enter any credits or collaborators for this project: ",
        validate: validateInput,
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "What license will you be using for this project? ",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "Describe how and/or where users can contribute to this project: ",
        validate: validateInput,
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Enter any testing instructions required for this project: ",
        validate: validateInput,
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "Enter your GitHub username: ",
        validate: validateInput,
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What email address can users reach you at? ",
        validate: function (value) {
           if(isEmail(value)) {return true;}
           else {return "Please enter a valid email address.";}
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)  //takes in a file name and data, then writes the data to the file (from fileName)
{
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log("error writing to file");
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init(
    
);
