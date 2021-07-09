// ? external imports
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    work: {
      type: String,
      require: true,
    },
    password: {
      type: String || Number,
      require: true,
    },
    cPassword: {
      type: String || Number,
      require: true,
    },
    tokens: [
      {
        token: {
          type: String,
          require: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

// * password hash
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next();
});

// * generate token
userSchema.methods.generateAuthToken = async function () {
  try {
    let secret = process.env.SECRET_KEY;
    let token = jwt.sign({ _id: this._id }, secret);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
const User = mongoose.model('User', userSchema);

module.exports = User;
