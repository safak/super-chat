const router = require("express").Router();
const verify = require("./verifyToken");
const Private = require("../model/Private");
const User = require("../model/User");

//GET PRIVATE GROUP BY ID
router.get("/:id", (req, res) => {
  Private.findById(req.params.id)
    .then((privates) => res.json(privates))
    .catch((err) => res.status(400).json("Error " + err));
});

//GET USERS ALL PRIVATE GROUPS
router.get("/user/:id", (req, res) => {
  Private.find({ members: { $in: [req.params.id] } })
    .then( (privates) => {
      privates.map((p) => {
        const id = p.members.filter((p1) => p1._id !== req.param.id)[0];
        const user = User.findById(id);
        p = {...p, user}
      })
    }).then((privates) => res.json(privates));
    .catch((err) => res.status(400).json("Error " + err));
});

router.post("/add", async (req, res) => {
  const name =
    req.body.members[0] > req.body.members[1]
      ? req.body.members[1] + req.body.members[0]
      : req.body.members[0] + req.body.members[1];

  const newPrivateGroup = new Private({
    name,
    members: req.body.members,
    lastMessage: null,
  });

  await newPrivateGroup
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

//ADD LAST MESSAGE TO PRIVATE GROUP
router.route("/addLastMessage/:id").post((req, res) => {
  Private.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { lastMessage: req.body.lastMessage } }
  )
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
