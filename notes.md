
# Yargs lesson

- Go through solution from morning activity

- Discuss the power of npm libraries 

- Make new repo

- npm were we going to use is called yargs - this libary is going to change the data type of argv 

- The brief is the same as this morning 

- You guys are going to built it from scratch

- I am going to show you how it works 

- Convert what we did this morning and converting it to use this nom library 
Instead

* open new folder in VS Code
* Open new folder
* create repo in git and initialise project

- What command do I use 

```
npm init -y
```
* -y = yes to all options 

* show package.json
- Instructions to anyone downloading My repo 

- Houses any npm libs we’ve installed in Package.json 

- We are using yargs

```
npm I yargs 
```

* Show dependencies 

- What folder does my bus logic go in?

```
src directory
app.js 
utils 
Index.js 
```

* npm website 
* Explain how to use it 

* Examples unnecessary over complication - everything there library does 

```
const yargs = require("yargs");
Console.log(yargs.argv)
```

We have replaced process.argv with yargs 

```
Node src/app.js Alex
```

What datatype is the log?

key value pairs 
_ arugments we have added 
and 
$0 means node 

```
Node src/app.js Spiderman 
```

Spiderman appears in the array in _ key

We are going to change the datatype
So we can work with objects and dot notation 

I can create key value Pairs in the terminal 

Do this with -- title Spiderman 

```
Node src/app.js —title Spiderman 
```

#### Why Yargs

Gives user an indicator of what they are inputting 

How can I change line 3 to just return 
The actors name?
```
Yargs.argv.actor?
```
Using objects so we use dot notation syntax 

* don't pass value to actor key
what will log for actor now
* returns true

```
Node src/app.js  -- title Spiderman  — actor
```

What if I did this?

```
if(yargs.argv.actor) { 
	console.log(“its “ + yargs.argv.actor)
}
```

```
Node src/app.js  -- title Spiderman  --actor “Dave Smith”
```
Its Dave Smith

```
Node src/app.js  -- title Spiderman 
```


This helps us do
Node src/app.js   -- add  title Spiderman  --actor “Dave Smith”

``
Console.log(yargs.argv) 
``` 

### Return to brief 

Look at the brief and problem solve it 

* Build app without adding detail 
* Build template
* remind them. they using a object now, not an array
dot notation syntax
 
