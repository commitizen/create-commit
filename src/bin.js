#!/usr/bin/env node
const { hello } = require('./lib');
console.log(`I was executed as a binary and ${hello()}`);
