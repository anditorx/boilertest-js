prompt = require("prompt-sync")();

function WelcomeTest(param) {
  param = prompt("Siapa namanya: ");
  console.log(`Halo ${param}! Welcome to BoilerTest JavaScript.`);
}

// WelcomeTest();
module.exports = WelcomeTest();
