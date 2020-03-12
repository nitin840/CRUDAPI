var app = require('./index')
const port = process.env.PORT || 8080

app.use('/',(req,res)=>{
    res.render("welcome", {
        hello: Date.now() + " Hello, this endpoint is working... OMG!",
        title: "Heroku CRUD"
      });
})

app.listen(port,()=>{ 
    console.log("Express server listening on port %d in %s mode",port, app.settings.env); 
})