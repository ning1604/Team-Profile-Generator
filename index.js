// added required modules
const inquirer = require('inquirer');
const fs = require('fs');

// added team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link to page-template
const generateHTML = require('./src/page-template.js');

// array to store data
const teamArray = [];

// function prompts user for info for manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your team manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your team manager's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your team manager's email?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is your team manager's office number?`
        }
    ])
    .then(data => {
        const {name, id, email, officeNumber} = data;
        const manager = new Manager (name, id, email, officeNumber)

        // pushing inputs for manager into teamArray
        teamArray.push(manager);
    })
}

// function to prompt user to add employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                `I don't want to add any more team members`
            ]
        }
    ])
    .then(data => {
        // handles employee prompts
        if (data.role === 'Engineer') {
            addEngineer();
        } else if (data.role === 'Intern') {
            addIntern();
        } else if (data.role === `I don't want to add any more team members`) {
            var content = generateHTML(teamArray)
            writeToFile(content);
        }
    })
}

// function to prompt user to add engineer information
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your engineer's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineer's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your engineer's email?`
        },
        {
            type: 'input',
            name: 'gitHub',
            message: `What is your engineer's GitHub username?`
        }
    ])
    .then(data => {
        const {name, id, email, gitHub} = data;
        const engineer = new Engineer (name, id, email, gitHub)
        teamArray.push(engineer);
    })
    // calls addEmployee prompts
    .then(addEmployee)
}

// function to prompt user to add intern information
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your intern's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your intern's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your intern's email?`
        },
        {
            type: 'input',
            name: 'school',
            message: `What is your intern's school name?`
        }
    ])
    .then(data => {
        const {name, id, email, school} = data;
        const intern = new Intern (name, id, email, school)
        teamArray.push(intern);
    })
    .then(addEmployee)
}

// function to write HTML file
function writeToFile(data) {
    fs.writeFileSync('./dist/index.html', data)
    console.log("Team profile has been successfully generated!");
    console.log("View generated team profile at index.html");
}

// function to initialize app
function init() {
    addManager()
        .then(addEmployee)
        .catch((err) => console.error(err))
}

// function call to initialize app
init();

