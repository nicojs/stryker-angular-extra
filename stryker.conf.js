const path = require('path');

module.exports = function (config) {
  config.set({
    files: [
      // Exclude files so we can include only particular files later on
      '!./**/*.ts',
      '!./**/*.js',
      '!./src/**/*.d.ts',

      // Include source files and flag them for mutation
      { pattern: './src/**/*.ts', included: false, mutated: true },

      // Exclude test files to later include them again without the mutated flag set to true
      '!./src/**/*.spec.ts',
      '!./src/test.ts',
      { pattern: './src/**/*.spec.ts', included: false, mutated: false },
      { pattern: './src/test.ts', included: false, mutated: false },

      // Ignore environment configuration files
      '!./src/environments/*.ts',

      // Other assets (HTML and CSS for the browser)
      './src/**/*.html',
      './src/**/*.css',

      // Stryker configuration needed to transpile with Webpack
      './stryker/*.js',
      './stryker/*.ts',
      './stryker/tsconfig.json'
    ],
    testRunner: 'karma',
    mutator: 'typescript',
    testFramework: 'jasmine',
    transpilers: ['webpack'],
    reporter: ['clear-text', 'progress'],
    coverageAnalysis: 'off',
    karmaConfigFile: './stryker/karma.conf.js',
    project: 'angular',
    logLevel: 'info',
    baseDir: path.resolve(__dirname)
  });
};