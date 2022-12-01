const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  passwordUpdateAt: Date,
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordUpdateAt = Date.now() - 1000;
  }

  next();
});

userSchema.method('verifyPassword', (inputPassword, databasePassword) =>
  bcrypt.compare(inputPassword, databasePassword),
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
