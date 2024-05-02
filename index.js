const express = require('express');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();
// set up static files
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
const port = 3000;





app.post('/create_client');
app.get('/login');



app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, './routes/auth/test.html'));
});


app.listen(port, 'localhost', () => {
  console.log(`Server is running on http://localhost:${port}`);
});





