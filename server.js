var app = require('./index')
const port = process.env.PORT || 8080

app.use('image/',(req,res)=>{
    res.send('hello fellas, this  server is working!')
})

app.listen(port,()=>{ 
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env); 
})