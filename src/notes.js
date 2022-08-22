
// Go through solution from morning activity

// Power of npm libraries 
// Make new repo

// Npm lib were we going to us  s going to change the data type of argv 

// The brief is the same as this morning 
// You guys are going to built it from scratch

// I am going to show you how it works 

// Convert what we did this morning and converting it to use this nom library 
// Instead

// Open new folder
// Initial this a node project 
// What command do I use 
// Command - npm init -y
// -y = yes to all options 

// Instructions to anyone downloading 
// My repo 

// Houses any nom libs we’ve installed in
// Package.json 

// We are using yargs 
// Npm I yargs 

// Show dependencies 
// What folder does my bus logic go in?

// Src directory
// app.js 
// Utils 
// Index.js 

// Npm website 
// Explains how to use it 

// Examples unnecessary over complication - everything there library does 

const yargs = require("yargs");
Console.log(yargs.argv)

// Replaced process.argv with yargs 

// Node src/app.js 

// What datatype is the log? 2 key value pairs 
// _ and $0 means node 

// Node src/app.js Spiderman 

// Spiderman appears in the array in _ key

// We are going to change the datatype
// So we can work with objects and dot notation 

// I can create key value Pairs in the terminal 
// Node src/app.js —title Spiderman 

// Gives user an indicator of what they are inputting 

// How can I change line 3 to just return 
// The actors name?

console.log(Yargs.argv.actor)
// Using objects so we use dot notation syntax 

// Node src/app.js  -- title Spiderman  — actor
// Returns true

// What if I did this?

if(yargs.argv.actor) { 
	console.log('its ' + yargs.argv.actor)
}

// Node src/app.js  -- title Spiderman  — actor
// Its true 

// Node src/app.js  -- title Spiderman  --actor “Dave Smith”
// Its Dave Smith

// Node src/app.js  -- title Spiderman 

// What do I get nothing?

// This helps us do
// Node src/app.js   -- add  title Spiderman  --actor “Dave Smith”

Console.log(yargs.argv)  

if (yargsObj.add) {

} 

// Look at the brief and problem solve it 
// Targeted data = —tittle etc utils should not change in anyway 

// Build basic app without adding detail 

// Instead of array index using dot notation 

// Make repo 
// Before push what haven’t we done?src control button 

// gitignore in base directory


// Example command in README 
// node src/app.js --command “value