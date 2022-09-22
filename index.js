// included packages
const fs = require("fs");
const inquirer = require("inquirer");

// included Classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

// import function from pageTemplate to render HTML
const { renderPage } = require("./src/pageTemplate.js");

// array for employee objects
const teamArr = [];

const validateUserInput = (value) => {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question";
  }
};

const init = () => {
  console.log("Build your team by entering their info");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
        validate: validateUserInput,
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's ID?",
        validate: validateUserInput,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email address?",
        validate: function (value) {
          if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+.[a-zA-Z]+$/) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office phone number?",
        validate: validateUserInput,
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNumber
      );
      teamArr.push(manager);

      addToTeam();
    });

  function addToTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "selectMember",
          message: "Select a new team member:",
          choices: ["Engineer", "Intern", "Actually, I'm done adding for now"],
        },
      ])
      .then((response) => {
        switch (response.selectMember) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            console.log("Team is completed!");
            buildTeam();
            break;
        }
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your interns's email address?",
          validate: function (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+.[a-zA-Z]+$/) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the name of your intern's school?",
          validate: validateUserInput,
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.school
        );
        teamArr.push(intern);

        addToTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
          validate: function (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+.[a-zA-Z]+$/) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your engineer's Github username?",
          validate: validateUserInput,
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.github
        );
        teamArr.push(engineer);

        addToTeam();
      });
  }

  function buildTeam() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', renderPage(teamArr), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Web page created'
            });
        });
    });
  }
};



init();
