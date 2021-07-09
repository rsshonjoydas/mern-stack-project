// ? internal import
const User = require('../models/userSchema');

// * get posts page

// TODO: display posts
const getSingIn = async (req, res) => {
  try {
    const singIn = await User.find();

    res.status(200).json(singIn);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// TODO: create post
const createUser = async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: 'plz, filled the field property' });
  }

  User.findOne({ email })
    .then((userExit) => {
      if (userExit) {
        return res.status(422).json({ error: 'Email already exit!' });
      }
      const user = new User({ name, email, phone, work, password, cPassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'user registered successfully!' });
        })
        .catch((err) => res.status(500).json({ error: 'Failed to register!' }));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getSingIn,
  createUser,
};
