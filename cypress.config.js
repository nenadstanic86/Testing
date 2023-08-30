const { defineConfig } = require("cypress");
const { mochawesome } = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },  
});
