const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique:true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique:true
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    profilePicture:{
      type:String
    },
    isHidden:{
      type:Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
