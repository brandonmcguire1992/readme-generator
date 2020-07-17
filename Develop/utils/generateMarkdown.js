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

  ## Installation Instructions
  ${instructions}

  ## Usage
  ${usage}

  ## Contributions
  ${collabs}

  ## Questions or Concerns
  [${email}](mailto:${email})
  `;


}

module.exports = generateMarkdown;
