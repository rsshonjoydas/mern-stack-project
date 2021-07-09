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

  try {
    const userExit = await User.findOne({ email });
    if (userExit) {
      return res.status(422).json({ error: 'Email already exit!' });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cPassword,
    });
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: 'user registered successfully!' });
    } else {
      res.status(500).json({ error: 'Failed to register!' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSingIn,
  createUser,
};
