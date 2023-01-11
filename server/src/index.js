const app = require('./app');
const connectDB = require('./config/db.config');

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
