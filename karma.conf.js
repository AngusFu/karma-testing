// Karma configuration
// Generated on Thu Jan 07 2016 10:42:30 GMT+0800 (Malay Peninsula Standard Time)

module.exports = function(config) {

  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '30'
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    sauceLabs: {
        testName: 'Karma Tests'
    },

    customLaunchers: customLaunchers,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js': [ 'browserify' ],
      'test/**/*.js': [ 'browserify' ]
    },

    // Browserify config
    browserify: {
      debug: true,
      transform: ['babelify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.CI ? Object.keys(customLaunchers) : ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
