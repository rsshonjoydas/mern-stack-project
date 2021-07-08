// ? internal import
const User = require("../models/userSchema")

// * get posts page

// TODO: display posts
const getSingIn = async (req, res) => {
  try {
    const singIn = await User.find()

    res.status(200).json(singIn)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}


// TODO: create post
const createUser = async (req, res) => {
  const post = req.body;
  
  const newUser = new User(post)

  try {
    await newUser.save()

    res.status(201).json(newUser)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

module.exports = {
  getSingIn,
  createUser,
}