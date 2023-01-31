
```
console.log("hello world")
```
5 min activity node index.js

look at brief again - CLI The process.argv() method is used for returning all the command-line arguments that were passed when the Node.js process was being launched. The first element will always contains the same value as process.execPath.

```
console.log(process.argv) 
```
Look at output

start to build logic How can we find Alex in the Array? === so we need to check for the words and datatypes
```
if (process.argv[2] === 'Alex') { 
    console.log("Correct") 
} else { 
console.log("Not an Alex") 
}
```

Bad way of writing it
What is a parameter? Empty var until I pass something into it how do I call this function with the parameter?

```
const app = (argv) => { 
    if (process.argv[2] === 'Alex') { 
    console.log("Correct") 
    } else { 
    console.log("Not an Alex") 
    } 
}
app(process.argv) 
```

switch if / else to swtich case The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality. A switch statement works much faster than an equivalent if-else ladder.

```
const app2 = (argv) => { 
    switch(argv[2]){ 
        case "Alex": 
        console.log('correct') 
        <!--what goes here? -->
        break;
        case "David":
            console.log('Its David')
        break;
    
        default:
            console.log('nobody')
        break;
    }
}

app2(process.argv) 
```
Rather than just logging this lets store it in an const or a var

```
const app3 = (argv) => { 
    switch(argv[2]){ 
        case "Alex": 
            const name = argv[2] 
            console.log(name + ' is stored in a const') 
            break;
        case "David":
            console.log('Its David')
        break;
        default:
            console.log('nobody')
        break;
    }
}
app3(process.argv) 
```
open reference app start repo

```
const movie = argsArr[3]
console.log(movie +' is stored')

```

how are we going to store this in a array - remeber breif
```
const movie = [argsArr[3]]
console.log(movie) 
```

how can we store the optional information?

```
const movie = [argsArr[3], argsArr[4]]
console.log(movie) 
```

multiple words
```
node src/app.js add Superman David Smith 
```

multiple words
```
node src/app.js add Superman "David Smith"
```








