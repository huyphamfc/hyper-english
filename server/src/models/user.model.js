const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
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
    this.passwordUpdateAt = new Date(Date.now() - 1000);
  }

  next();
});

userSchema.method('checkPassword', async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
});

userSchema.method('isPasswordChange', function (decodedTimestamp) {
  return this.passwordUpdateAt.getTime() > decodedTimestamp * 1000;
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
