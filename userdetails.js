const mongoose = require("mongoose");
const userdetailsSchema = new mongoose.Schema(
    {
        uname: String,
        email: String,
        phoneNo: String,
    },
    {
        collection:"UserInfo",
    }
);
mongoose.model("UserInfo",userdetailsSchema);