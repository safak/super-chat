const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: { type: String },
    adminUserId: { type: String },
    members: { type: Array},
    secretKey: { type: String },
    groupPhoto: { type: String },
    lastMessage:{type:Object, required:false}
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
