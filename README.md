# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


## Weather-Journal App Project
Overview
This project is about creating an asynchronous web app that uses Web API and user data to dynamically update the UI. The aim is to only use plain JavaScript on both client side and server side using Fetch API, Node.js and Express framework.

## About the project
The purpose of this project is to practice vanila JavaScript by putting together a basic weather journal app.
The idea is to fetch weather data by zip code and country code and then collect some info from user such as feelings and then POST these data back to the node.js endpoint
User then can make a GET call to node.js app to retreive the most recent data
It uses JavaScript promises and async functions
How to run it locally
In app.js file, insert your own API key for the openweather API. You can obtain the api key at https://openweathermap.org/guide
replace at below line

const apiKEY = '<INSERT_YOUR_API_KEY_HERE>';
Open the project folder in VS Code
Start the new terminal at the project folder location
type node server.js to start the server
server will start at port 3000. then type http://localhost:3000 in your browser.