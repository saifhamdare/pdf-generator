import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import users from './routes/users.js';
import generatePdfHandler from'./api/generate-pdf.js';
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
app.use('/users', users);

app.get('/', (req, res) => {
  // res.send('Welcome to the PDF Generation API');
    const html = `
    <html>
      <head><title>Server Home</title></head>
      <body>
 
        <h1>List of APis</h1>
        <p>Sent directly from Express!</p>
        <div className="">
        <div style=" padding: 5px; border: 1px solid #ccc;background-color: #9f9f9f; border-radius: 4px;" >GET: /</div>
        <div  style=" padding: 5px; border: 1px solid #ccc;background-color: #f0f0f0; border-radius: 4px;" >POST: /generate-pdf</div>
        </div>
      </body>
    </html>
  `;

  res.set('Content-Type', 'text/html');
  res.send(html);
});
app.post('/generate-pdf', generatePdfHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




export default app;