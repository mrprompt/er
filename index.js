#!/usr/bin/env node
'use strict';

let argv = require('minimist')(process.argv.slice(2));
let er = require('./src/er');

let result = er(...argv._);

console.log(result);


