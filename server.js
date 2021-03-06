// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());
/* Middleware*/
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    console.log("server running");
   console.log(`running on localhost: ${port}`);

};
  

// Initialize all route with a callback function
app.get('/all', sendData);
  function sendData (req, res) {
    res.send(projectData);
  
   
    
};
//Post Route

app.post('/add', addData);
function addData(req, res) {
 //const projectData = req.body;
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['feelings'] = req.body.feelings;
  res.send(projectData);
  console.log(projectData)
}

 