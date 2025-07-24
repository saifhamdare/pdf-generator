// api/index.js
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>Welcome to PDF API</h1><p>Available routes: /api/users, /api/generate-pdf</p>`);
}