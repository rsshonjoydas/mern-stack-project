// ? external import
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// ? internal import
const User = require('../models/userSchema');

// * user sign in and registration

// TODO: sign up
const createUser = async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: 'plz, filled the field property' });
  }

  try {
    const userExit = await User.findOne({ email });
    if (userExit) {
      return res.status(422).json({ error: 'Email already exit!' });
    } else if (password !== cPassword) {
      return res
        .status(422)
        .json({ error: 'Recover password are not matching!' });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cPassword,
      });
      await user.save();
      res.status(201).json({ message: 'user registered successfully!' });
    }
  } catch (error) {
    console.log(error);
  }
};

// TODO: sign in and validation
const getSingIn = async (req, res) => {
  // * empty field validation
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Plz Filled the data' });
    }

    // * email validation
    const signIn = await User.findOne({ email });
    if (signIn) {
      const isMatch = await bcrypt.compare(password, signIn.password);

      // * jwt token
      const token = await signIn.generateAuthToken();
      console.log(token);

      // * cookie
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2.592e+9),
        httpOnly: true
      })

      // * password validation
      if (!isMatch) {
        res.status(404).json({ error: 'Invalid Authentication!' });
      } else {
        res.json({ message: 'User SignIn Successfully!' });
      }
    } else {
      res.status(404).json({ error: 'Invalid Authentication!' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSingIn,
  createUser,
};
