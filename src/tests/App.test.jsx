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
