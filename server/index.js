const express   = require('express');
const cors     = require('cors');
const bodyParser      = require('body-parser');
const generatePdfHandler = require('./api/generate-pdf');
const app = express();
const PORT = process.env.PORT || 5000;

// Custom CORS middleware at the very top
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/generate-pdf', generatePdfHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




module.exports = app;