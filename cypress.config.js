const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": false,
    "defaultCommandTimeout": 5000,
    "pageLoadTimeout": 10000,
    "excludeSpecPattern": ["*.js", "*.md "]
}
});
