const express   = require('express');
const pdf      = require('html-pdf');
const cors     = require('cors');
const bodyParser      = require('body-parser');
const PDFTemplate = require('./documents/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Add this custom CORS middleware for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(cors({
  origin: [
    'https://pdf-generator-frontend.netlify.app',
    // 'https://localhost:3000',
    'http://localhost:3000',
  ]
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// post route to create PDF
app.post('/create-pdf', (req, res) => {
    pdf.create(PDFTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject()); 
            // res.status(500).send('Error generating PDF');
        }
         res.send(Promise.resolve('PDF created successfully'));
     
    });
})
// get route to download PDF
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`, (err) => {
        if (err) {
            console.error('Error downloading PDF:', err);
            res.status(500).send('Error downloading PDF');
        }
    });
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})