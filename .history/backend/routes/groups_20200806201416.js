const router = require("express").Router();
const verify = require("./verifyToken");
const Group = require("../model/Group");
const { v4: uuidv4 } = require("uuid");

//GET A GROUP BY ID
router.get("/:id", (req, res) => {
  Group.findById(req.params.id)
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json("Error " + err));
});

//GET USERS ALL GROUPS
router.get("/user/:id", (req, res) => {
  Group.find({ members: { $in: [req.params.id] } })
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json("Error " + err));
});

//ADD A GROUP
router.post("/add", async (req, res) => {
  const newGroup = new Group({
    name: req.body.name,
    adminUserId: req.body.adminUserId,
    members: req.body.members,
    secretKey: uuidv4(),
  });

  await newGroup
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

//LEAVE THE GROUP
router.route("/leave/:id").post((req, res) => {
  Group.findByIdAndUpdate(
    { _id: req.params.id },
    { $pull: { members: { $gt: req.body.userId } } }
  )
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

//ADD LAST MESSAGE TO PRIVATE GROUP
router.route("/addLastMessage/:id").post((req, res) => {
  Group.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { lastMessage: req.body.lastMessage } }
  )
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
