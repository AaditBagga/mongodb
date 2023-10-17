const mongoose = require("mongoose")
const namesModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/mongodb_demo'; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to the database")
    // List All Entries
    //namesModel.find({})
    //.then((data)=>{
    //    console.log(data)
    //    mongoose.connection.close()
    //})
    //.catch((connectionError)=>{
    //    console.log(connectionError)
    //})
    // Fetch one document
    namesModel.find({id: 2})
    .then((data)=>{
        console.log(data)
    //    mongoose.connection.close()
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
    namesModel.findById("652a0abf74e0e2fd2ffc4a08")
    .then((data)=>{
        console.log(data)
    //    mongoose.connection.close()
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
    //let newData = new namesModel({id: 10, name: "Testing Mongoose"});
    //namesModel.insertMany(newData)
    //.then((data)=>{
    //    console.log(data)
    //    mongoose.connection.close()
    //})
    //.catch((connectionError)=>{
    //    console.log(connectionError)
    //})
    //let newData = {$set: {id: 10, name: "Updated Content"}};
    //namesModel.update({id: 10}, newData)
    //.then((data)=>{
    //    console.log(data)
    //    mongoose.connection.close()
    //})
    //.catch((connectionError)=>{
    //    console.log(connectionError)
    //})
    namesModel.remove({id: 2})
    .then((data)=>{
        console.log(data)
        mongoose.connection.close()
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
})
.catch((connectionError) => {
    console.log(connectionError)
})
