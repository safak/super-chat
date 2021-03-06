const mongoose = require("mongoose");
const { boolean } = require("@hapi/joi");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    groupId:{type:String, required:true},
    senderId:{type:String, required:true},
    text: { type: String, required:true},
    isDeleted: {type:Boolean, default:false},
    seenBy: {type:Array, default:[]}
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
