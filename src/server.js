const express = require("express");
const app =  express()
const port = process.env.PORT || 5001;

app.use("/static", express.static("public"));
//access public folder when a req is made to static

app.get('/health',(req,res) => {
	try {
    	res.json({message:"server is ready at 5001 port "})
    } catch (error) {
    	consolelog(error)
      	res.sendStatus(500)
    }
})

app.get('/helloworld', (req, res) => {
    res.send('Hello World!')
})

app.get('/html', (req, res) => {
    res.send('<h1>Some HTML</h1>');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(port, ()=> {
    console.log(`Listing on port ${port}`)
})
