module.exports = {
    moduleFileExtensions: ['js', 'json'],
    globals: {
        NODE_ENV: 'test'
    },
    globalSetup: './tests/data-setup.js',
    testEnvironment: 'node'
};
