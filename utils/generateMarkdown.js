// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
if(!license) {return '';} // if no license, return empty string

  return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {return '';} // if no license, return empty string

  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {return '';} // if no license, return empty string

  return ` ${renderLicenseBadge(license)}
  This project is licensed under the ${license} license.
  For more information, please visit ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
    
  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
      
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License 
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Contact Information 
  * GitHub Username: ${data.userName}
  * Contact Email: <${data.userEmail}>
  
  `;
}

module.exports = generateMarkdown;
