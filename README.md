## Unit Testing using React Testing Library and Jest

## Pre-requisite- Assume that we have a react app running on local host. 
- Run below command on vs code.
  npm start

## Libraries used- 
1. Jest is a open source unit test framework created by Facebook.It has built in features like snapshot testing and coverage collections. We will be using Jest to run our tests.

2. React Testing Library is used to render components, manipulate them and trigger events.


## Jest Configuration
Create a file jest.config.js and add the configurations. like coverage directory, test environments etc

```java
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: '<rootDir>/src/tests/custom-test-env.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
```

## Adding scripts

```java
scripts:{
... //scripts you already have
test: "jest",
coverage: "jest --coverage"
}
```

## Custom renderer method
We have created a custom render method inside test-utils.js. This method will render the component with mock redux state and mock props. We are using mockStore to initialize the custom store that will keep mocked redux state.

## Writing tests
We create a folder called tests and add test.jsx and other test files inside this folder. 
Run below command to execute test
npm test

```java
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';
import {renderWithProvider} from './test-utils.js'

describe('App tests', () => {
	const props = {}
	const mockState = {}
	test('should contains the heading 1', () => {
		const { container } = renderWithProvider(<App {...props} />, {mockState});
		const heading = screen.getByText(/Hello world! I am using React/i);
		expect(heading).toBeInTheDocument();
		screen.debug();
	});
});
```

## Babel in React 
Babel is a JavaScript compiler that's a key tool for developers building React applications. Babel converts modern JavaScript code into older, more widely supported versions. This allows developers to use the latest JavaScript features while still ensuring compatibility with older browsers.
1. Converts JSX
Babel is used by React to convert JSX syntax into JavaScript.

## What is babel? 
Babel is a transpiler! Cool, and what is a transpiler? Transpiler is a program that converts 1 type of source code to another type of source code. In our case, it takes all the fancy javascript (react, newer ECMAScript features, typescript etc) and converts it to old school browser understandable javascript.

## Defining rules for babel

Babel is a transpiler so we need to tell it what to transpile, we do this using presets. These are predefined configuration that is used to transpile different type to javascript to browsers understandable one.
Let’s install these presets first.

```java
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
1. @babel/preset-env: Transforms modern JavaScript features into backwards-compatible code.
2. @babel/preset-react: Transforms JSX syntax into plain-vanilla JavaScript function calls.

## What is index.jsx and index.html?

1. index.html -> acts as the entry point for your web application. It contains the foundational HTML structure that is initially displayed in the browser. Typically residing inside public/index.html. 
This file holds the basic HTML layout, including a element tagged with an id attribute, commonly labeled as ‘root’, where the React application integrates.
2. index.js -> The index.js file acts as the initial point of entry for your React application coded in JavaScript. Within src/index.js, you typically encounter the code responsible for rendering the root component of your application onto the DOM.

## What is Webpack in React?
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
Webpack bundles all the JavaScript files into single or output files.