# BOILERTEST JS

Boilerplate for test using JavaScript

## Installation

Install with npm

```
npm install
```

## Usage

```jsx
prompt = require("prompt-sync")();

function WelcomeTest(param) {
  param = prompt("Siapa namanya: ");
  console.log(`Halo ${param}! Welcome to BoilerTest JavaScript.`);
}

module.exports = WelcomeTest();
```

Running

```
node app/welcomeTest
```

[![CircleCI](https://github.com/anditorx/boilertest-js/blob/main/img-sample-running.png)](https://github.com/anditorx/boilertest-js/blob/main/img-sample-running)
