const mongoose = require("mongoose");
const uri = "mongodb+srv://user:userisusingthis@cluster0.tvzqn.mongodb.net/CHATDATA?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connected6")
    })

//creating a schema
const blockedusers = new mongoose.Schema({

    blockeduser: {
        type: String
    },
    blockedby: {
        type: String
    }



});

module.exports = mongoose.model("blockeduser", blockedusers);