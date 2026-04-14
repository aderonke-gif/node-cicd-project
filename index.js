const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from my DevOps CI/CD project!' });
});

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
