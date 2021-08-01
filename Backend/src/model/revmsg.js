const mongoose = require("mongoose");
const uri = "mongodb+srv://user:userisusingthis@cluster0.tvzqn.mongodb.net/CHATDATA?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connected5")
    })

//creating a schema
const RevmsgessageSchema = new mongoose.Schema({

    msg: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    }



}, { timestamps: true });

module.exports = mongoose.model("revmessage", RevmsgessageSchema);