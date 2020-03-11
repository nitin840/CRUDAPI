const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://nitin840:happyholi@userdb-4kaxt.mongodb.net/test?retryWrites=true&w=majority'
const dbUrl = MONGO_URI ||'mongodb://localhost:27017/imageInfo'

mongoose.Promise = global.Promise

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(()=>{
    console.log('successfully connected to database')
}).catch(()=>{
    console.log('unable to connect')
    process.exit()
});
