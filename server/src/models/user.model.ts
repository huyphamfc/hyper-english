import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  passwordUpdateAt: Date;

  checkPassword(inputPassword: string): Promise<boolean>;
  isPasswordChange(decodedTimestamp: number): boolean;
}

const userSchema = new mongoose.Schema<User>({
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

userSchema.method<User>('checkPassword', async function (inputPassword: string) {
  return await bcrypt.compare(inputPassword, this.password);
});

userSchema.method<User>('isPasswordChange', function (decodedTimestamp: number) {
  return this.passwordUpdateAt.getTime() > decodedTimestamp * 1000;
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
