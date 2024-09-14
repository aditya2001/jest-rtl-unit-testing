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