// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'Apache 2.0'){
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license == 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    else if (license == 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'Apache 2.0'){
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license == 'GNU GPLv3') {
        return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    }
    else if (license == 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == 'None (or other that you will add yourself)') {
        return '';
    }
    else {
        // REVISIT THIS DURING TUTORING
        return `
        This project is covered under the ${renderLicenseLink(license)} license guidelines. Please visit the link for more details.
        `;
    }
}

const testHandler = tests => {
    if (tests == '') {
        return '';
    }
    else {
        return '- [Tests](#tests)';
    }
}

const licenseHandler = license => {
    if (license == 'None (or other that you will add yourself)') {
        return '';
    }
    else {
        return '- [License](#license)';
    }
}

const contributionHandler = contributers => {
    const contribArr = contributers.split(' ');
    const formattedArr = []
    for (let i = 0; i < contribArr.length; i++) {
        const contributer = `- [${contribArr[i]}](https://github.com/${contribArr[i]})<br>`;
        formattedArr.push(contributer)
    }
    return formattedArr.toString(); // REVISIT THIS DURING TUTORING
}

const testsHandler = tests => {
    if (!tests) {
        return '';
    }
    else {
        const testsArr = tests.split(' ');
        const formattedArr = []
        for (let i = 0; i < testsArr.length;i++) {
            const tester = `- ${testsArr[i]}<br>`
            formattedArr.push(tester)
        }
        return `## Tests
        ${formattedArr.toString()}`; // REVISIT THIS DURING TUTORING
    }
}

module.exports = promptsData => {
    const { title, description, installation, usage, license, contributers, tests, githubName, email } = promptsData;
    // TODO: Create a function to generate markdown for README
    return `
    ${renderLicenseBadge}
    # ${title}
    
    ## ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Screenshot](#screenshot)
    - [Contributers](#contributers)
    ${testHandler(tests)}
    - [Questions](#questions)
    ${licenseHandler(license[0])}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributers
    ${contributionHandler(contributers)}

    ${testsHandler(tests)}

    ## Questions
    [${githubName}](https://github.com/${githubName})
    ${email}
    Please send all questions to the above email address or to me at my GitHub profile that's linked above

    ## License
    ${renderLicenseSection(license)}
    `;
};
