module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: '<rootDir>/src/tests/custom-test-env.js',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
