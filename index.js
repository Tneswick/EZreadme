// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// utilities
const generateMarkdown = require("./utils/generateMarkdown");
const writeFile = require("./utils/generate-file.js");

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("A name is required");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project:",
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log("A description is required");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide some installation instructions:",
        validate: (installInput) => {
            if (installInput) {
                return true;
            } else {
                console.log("Install instructions are required");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide examples for use of your project:",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Usage exapmles are required");
                return false;
            }
        },
    },
    {
        type: "list",
        name: "license",
        choices: [
            "Apache 2.0",
            "GNU GPLv3",
            "MIT",
            "None (or other that you will add yourself)",
        ],
        message:
            'Which license would you like to use for this project? If you don\'t see one you want, you can select "None" and edit the created readme later on yourself',
        validate: (licenseSelect) => {
            if (licenseSelect) {
                return true;
            } else {
                console.log('You must select a license, or select "None"');
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contributers",
        message:
            "Please enter the GitHub usernames of any contributers of this project separated by spaces (other than you):",
    },
    {
        type: "input",
        name: "tests",
        message:
            'Please provide the names of any Test Frameworks you used for this project (If there are none, leave this section blank and the "Tests" section will be omitted):',
    },
    {
        type: "input",
        name: "githubName",
        message:
            "Please provide your GitHub username so that people can direct questions to you:",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Your GitHub username is required");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message:
            "Please provide an email address you would like to receive questions about your project in:",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("An email address is required");
                return false;
            }
        },
    },
];


// function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// // Function call to initialize app
init()
    .then(projectData => {
        console.log(projectData);
        return generateMarkdown(projectData);
    })
    .then(markdownData => {
        
        return writeFile(markdownData);
    })
    .catch(err => {
        console.log(err);
    })
