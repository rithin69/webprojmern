// import { createServer } from "http";
// import { readFileSync } from "fs";
import fetch from 'node-fetch';
import express from "express";
const app=express();
// import { express } from 'express'
const port=process.env.port || 8000///FOR HEROKU


fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=e9587dc8b4fefe5dc3cf6117eb44213d"
)
    
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));


// 3. Async/Await :
// In javascript there is a special syntax to work with promises i.e async/await

// async: For implementing it we just have to use async in the front of our function, which means the function will always returns a promise. The return values will be automatically wrapped in the promise. Simply the async function makes sure that our function will return a promise.
// await: It only works inside of async function. Await keyword makes javascript wait till the promise settles and returns itself means the JS will wait till the promise is resolved or rejected.
// Now coming back to our example here we are creating a new function which returns the response from the fetch call i.e either a resolved promise(object with valid weather info) or rejected promise(error object).
// In the method first we are using await to wait till the fetch is response is settled.

// The function execution will pauses on the line where await is called and resumes when the promise is settled. It doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// And in the end we are just calling the getWeather method.





// Fetch with async await:
// async function getWeather() {
//     const weather = await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=e9587dc8b4fefe5dc3cf6117eb44213d"
//     );
//     let response = await weather.json();
//     console.log(response);
// }

// getWeather();


// Example with IFFIE: (Immediately Invoked Function Expression)
// this function will be immediately invoked as the name suggests. And I have used try and catch block for handling exceptions. This instead of storing the weather info in a variable we can directly use use url with fetch. Instead of just logging the data we can use specific info on the response object and store it in a variable. and then use it front end for showing weather information.



app.get("/",(req,res)=>{
  


(async () => {
  await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=vasai&units=metric&APPID=e9587dc8b4fefe5dc3cf6117eb44213d"
  )
      .then((response) => response.json())
      .then((data) => {
          const forecast = data.weather[0].description;
          const temperature = data.main.temp;
          const name = data.name;
           res.write(`<p>Today's forecast for ${name}: ${forecast}<p>`);
           res.write(`It's currently ${temperature} degree Celsius `);
           res.send()
          })
      .catch((err)=>console.log(`Error: ${err}`));
})()
  
});
app.listen(port,()=>{   
  console.log(`listening the port at ${port}`)
})
// for heroku 
//otherwise replace port by 8000
