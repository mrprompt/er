#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var er = require('./src/er');

console.log(er(argv._[0], argv._[1]));
