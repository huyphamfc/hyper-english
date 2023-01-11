const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const { MONGODB_URI } = process.env;
    if (!MONGODB_URI) throw new Error('Connect MongoDB fail.');

    await mongoose.connect(MONGODB_URI);
    console.log('Connect MongoDB successfully.');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return;
    }

    console.log('Unknown Error.');
  }
};
