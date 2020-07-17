// array of questions for user
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project! (Required)',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter a description of your project')
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use!'
    },
    {
        type: 'input',
        name: "collabs",
        message: 'Please add any collaborators!',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please specify a license for your project!',
        choices: [
            'MIT',
			'GNU AGPLv3',
			'GNU GPLv3',
			'GNU LGPLv3',
			'Mozilla Public 2.0',
			'Apache 2.0',
			'Boost Software 1.0',
			'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: (userName) => {
            if (userName) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('README.md created! Congrats!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            return generateMarkdown(data);
        })
        .then((markdown) => {
            writeToFile('README.md', markdown);
        })
        .catch((err) => {
            console.log(err);
        });
}

// function call to initialize program
init();
