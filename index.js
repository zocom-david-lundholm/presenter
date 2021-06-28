#!/usr/bin/env node
const [,, ...args] = process.argv
const { exec } = require('child_process')
const path = require('path')

const PRESENTER_PATH = path.join('node_modules', '@zocom', 'presenter')

if(process.argv[2] === 'demo'){
  while(process.argv.length > 2) { process.argv.pop() }
  process.argv.push( path.join(PRESENTER_PATH, 'example','example-presentation.md'))
}

process.argv.push("--preprocessor",  path.join(__dirname,"preprocessor","commands.js") )
process.argv.push("--highlight-theme", "monokai" )
if(!args.includes("--theme")){
  process.argv.push("--theme",  'https://zocom-utbildning.github.io/zocom-presenter-theme/zocom.css' )
}

console.log("-- Zocom Presenter --")
require('reveal-md/bin/reveal-md')