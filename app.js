/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=e8d2f7734859dbb8f2f4606b1ff76a71';
const Fahrenheit = '&units=imperial';

/* Input Elements */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+ '.' + d.getDate() + '.' + d.getFullYear();

/* Function to GET Web API Data*/

// Event listener to add function to existing HTML DOM element
const generate = document.getElementById('generate');
console.log("generate")

generate.addEventListener('click', performAction);
function performAction(e) {
  if (zip.value === '') {
    alert('Enter your zip code!');
  } else {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    console.log(feelings)
    getData(baseURL, zipCode, apiKey, Fahrenheit)
  
      .then(function (data) {
        console.log(data)
        postData('/add', { date: newDate, temp: data.main.temp , feelings: feelings })
        updateUI();
          
      })
  }
};
/* Function to GET Web API Data*/
  const getData = async (baseURL, zipCode, apiKey, Fahrenheit)=>{
      const response = await fetch(baseURL+zipCode+apiKey+Fahrenheit);
      console.log(response);
        try {
          const myData = await response.json();
          return myData
      } catch (error) {
        console.log("error", error);
          
   }
  }


    /* Function to POST data */
    const postData = async (url = '', data = {}) =>{
      console.log(data)
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
      });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      } catch (error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }
    //Get the data from server and update U/**I
    const updateUI = async () => {
      const request = await fetch('/all');
      try {
        const proData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${proData.date}`;
        document.getElementById('temp').innerHTML = `Temperature:${proData.temp}`;
        document.getElementById('content').innerHTML = `Feelings: ${proData.feelings}`;
      
      } catch (error) {
        console.log('error', error);
      }
    }
  