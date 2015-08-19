//Protractor configuration
// https://github.com/angular/protractor/blob/master/referenceConf.js
'use strict'

exports.config = {
	allScriptsTimeout: 110000,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [ 'e2e/**/*.spec.js'],
	framework: 'jasmine'
};