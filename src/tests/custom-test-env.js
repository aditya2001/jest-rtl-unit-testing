const Environment = require('jest-environment-jsdom-global');

module.exports = class CustomTestEnvironment extends Environment {
    constructor({ globalConfig, projectConfig }, context) {
        super({ globalConfig, projectConfig }, context);
        if(typeof this.global.TextEncoder === 'undefined') {
            const { TextEncoder } = require('util');
            this.global.TextEncoder = TextEncoder
        }
    }
};