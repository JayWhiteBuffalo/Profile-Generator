// included packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');

// included Classes
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// creating a dist folder for the HTML
const mkDir = path.resolve(__dirname, 'dist');
const dirPath = path.join(mkDir, 'index.html');

// import pageTemplate to render HTML
const renderPage = require("./src/pageTemplate.js");

// array for employee objects
const teamArr = [];

// array for ID's
const idArr = [];

