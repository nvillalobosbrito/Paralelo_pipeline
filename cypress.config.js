const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeigth: 900,
  chromeWebSecurity: false,
  DefaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  projectId: "dqcbsa",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
