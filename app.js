//importing required modules
const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

//create instance of the express application
const app = express();

//integrate thirdParty middleware
app.use(morgan('dev')); //logger middleware
app.use(bodyParser.json()); //body parser middleware

//set up root rout to send simple greeting as a response
app.get('/', (req, res) => {
res.send('Welcome to my Express server!');    
});

//set up about routs to send a brief description of the serve
app.get('/about', (req, res) => {
    res.send('This Server is built using Express and demonstrates middleware intergration');
});

//handle non existent routes by sending appropriate error messages
app.use((req, res) => {
  res.status(404).send('Routes not found')
});

//
const PORT = process.env.PORT || 3000;

//starts the server and listens on the specified port for connections.
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);

});


