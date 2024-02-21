#!/usr/bin/env node
"use strict";

const fs = require("fs");
const themeUtils = require("./theme.js");
const fileUtils = require("./write_to_file.js");

const args = process.argv.slice(2);

const hexColor = args[1];

if (!hexColor) {
  console.error("Error: No hex color provided. Please provide a hex color.");
  process.exit(1);
}

try {
  const { generateTheme, modifyTheme } = themeUtils;
  const { writeToFile } = fileUtils;

  generateTheme(hexColor).then((theme) => {
    modifyTheme(theme).then((modifiedTheme) => {
      writeToFile(modifiedTheme.cssTokens).then(() => {
        console.log("CSS tokens written to file.");
      });
    });
  });
} catch (error) {
  console.error("An error occurred:", error);
}
