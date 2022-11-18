const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server!',
  });
});

app.listen(8000, () => {
  console.log('Server running on port 8000.');
});
