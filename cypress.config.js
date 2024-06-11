const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  env: {
    //"TAGS": "not @ignore"
    "TAGS": "@smoke"
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
