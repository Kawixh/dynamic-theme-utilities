const fs = require("fs");

const writeToFile = async (variables) => {
  // Your CSS generation logic here, using `someValue` as needed
  let cssContent = `/* Generated CSS */
  .dtu__css_tokens {
  `;

  for (let key in variables) {
    // Add each key-value pair as a CSS custom property
    cssContent += `${key}: ${variables[key]};`;
  }

  cssContent += `}`;

  try {
    const cwd = process.cwd();
    const filePath = cwd + "/dtu__css_tokens.css"; // Adjust path if needed
    await fs.promises.writeFile(filePath, cssContent);
    return true;
  } catch (error) {
    throw new Error(`Failed to write CSS file: ${error.message} `);
  }
};

module.exports = { writeToFile };
