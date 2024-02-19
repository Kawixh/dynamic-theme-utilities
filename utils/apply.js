export const applyTheme = (theme) => {
  const variables = theme["cssTokens"];

  removeExistingStyle("dtu__cssTokens");

  // Create a new style element
  let style = document.createElement("style");
  style.id = "dtu__cssTokens";

  // Start of the style class
  style.innerHTML = `.dtu__cssTokens {`;

  // Iterate over the theme object
  for (let key in variables) {
    // Add each key-value pair as a CSS custom property
    style.innerHTML += `${key}: ${variables[key]};`;
  }

  // End of the style class
  style.innerHTML += `}`;

  // Append the style element to the head of the document
  document.head.appendChild(style);
};

const removeExistingStyle = (id) => {
  let existingStyle = document.querySelector(`style#${id}`);
  if (existingStyle) {
    existingStyle.remove();
  }
};
