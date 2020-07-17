// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    instructions,
    usage,
    collabs,
    license,
    github,
    email
  } = data;
  return `
  # ${title}
  
  ![${license} license badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-green)

  ## Description

  ${description}

  ## Table of Contents
    *[Installation](#instructions)
    *[Usage](#usage)
    *[License](#license)
    *[Contributions](#contributions)

  
  ## Installation Instructions
  ${instructions}

  ## Usage
  ${usage}

  ## License 
  This project is covered under the ${license} license 

  ## Contributions
  ${collabs}

  ## Questions or Concerns
  [${email}](mailto:${email})
  `;


}

module.exports = generateMarkdown;
