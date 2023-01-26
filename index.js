const inquirer = require("inquirer");
const fs = require("fs");
let liscenseBadge = "";
const path = require('path');

function renderLicenseBadge(license) {
  if(license === "MIT") {
    liscenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (liscense === "GPLv2") {
    liscenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (liscense === "Apache") {
    liscenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (liscense === "BSD 3-clause") {
    liscenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
};
const questions = [
  {
    type: 'input',
    message: 'What is the title of your application?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your application.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are your instructions for installation?',
    name: 'intallation',
  },
  {
    type: 'input',
    message: 'How would your application be used?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What License are you using?',
    choices: ["MIT", "GPLv2", "Apache", "BSD 3-clause"],
    name: 'license',
  },
  {
    type: 'input',
    message: 'How can users contribute?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What test have you run on your application?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },


]

inquirer
  .prompt(questions)
  .then((response) => {
  renderLicenseBadge(response.license)
  const finalString = `
  # ${response.title}

  ${liscenseBadge}

  ## Description

  ${response.description}

  ## Table of Contents
  - [Usage](#usage)
  - [License](#license) 
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Intallation

  ${response.intallation}

  ## Usage

  ${response.usage}

  ## License

  This application uses the ${response.license} liscense.

  ## Contributing

  ${response.contributing}

  ## Tests

  ${response.tests}

  ## Questions
  If you have any questions feel free to contact me through the links below.

  ### Github:

  [My GitHub](${response.github})

  ### Email:

  [My Email](mailto:${response.email})
  
  `

  console.log(finalString);

  fs.writeFileSync(path.join(process.cwd(),"professionalReadme.md"), finalString, (err) =>
    (err ? console.log(err) : console.log("success!"))
  );
});



