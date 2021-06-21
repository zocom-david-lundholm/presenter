#!/usr/bin/env node

const [,, ...args] = process.argv
const { exec } = require('child_process')
const path = require('path')

// process.argv.push("modules/8.authorization/test.md")
process.argv.push("--preprocessor",  path.join(__dirname,"preprocessor","commands.js") )
process.argv.push("--highlight-theme", "monokai" )
process.argv.push("--theme",  path.join("node_modules", "@zocom", "zocom-presenter","assets","styles","theme.css"))

console.log("-- Zocom Presenter --")
require('./node_modules/reveal-md/bin/reveal-md.js')