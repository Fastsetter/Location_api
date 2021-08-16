// ----------------LIBRARIES AND MODULES IMPORT ----------------------//

const express = require('express');
const mongodb = require('mongoose');
const fetch = require('node-fetch');
const { db } = require('./weatherSchema');
const weather = require('./weatherSchema');
const port = process.env.PORT || 5000;
require('dotenv').config(); // 


// -----------------MIDDLEWARES -----------------//

const app = express();
app.use(express.static('public'));
app.use(express.json());
// console.log(process.env);



// ------------------------API KEY----------------------//

const mongo_url=process.env.MONGO_URL;
const weather_api=process.env.API_KEY;


//  ---------------------- MONGODB CONNECTION -----------------------//

mongodb.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => handleError(error));

//  ----------------------- ROUTES ---------------------//



app.get('/', (req, res) => {

      res.status(202).sendFile(__dirname + '/public/html/index.htm')
});
app.get('/iss', (req, res) => {
      res.sendFile(__dirname + '/public/html/getIss.htm');

})
app.get('/map', (req, res) => {
      res.sendFile(__dirname + '/public/html/leaf_let.htm');

})

app.get('/geo', (req, res) => {
      res.sendFile(__dirname + '/public/html/geolocation.htm');
})

app.get('/find',(req,res)=>{
      
})

// ------------------------- WEATHER API ------------------------//




app.post('/api', async (req, res) => {
      const timestamp = new Date().toString();
      
      // ------------ Saving Data to Mongo Database -----------------//
      const lat=req.body.lat;
      const lon=req.body.lon;
      const weather_data = new weather({
            name:req.body.name,
            time_stamp: timestamp,
            latitude: req.body.lat,
            longitude: req.body.lon,
            feels_like: req.body.des.feelslike_c,
            description: req.body.des.condition.text

      });
      
      const update=await weather.findOneAndReplace({latitude:lat,longitude:lon},{
            name:req.body.name,
            time_stamp: timestamp,
            latitude: req.body.lat,
            longitude: req.body.lon,
            feels_like: req.body.des.feelslike_c,
            description: req.body.des.condition.text
      });

      if(!update){
            weather_data.save();
      }


})


app.get('/weather/:latlon', async (req, res) => {
      const latlon = req.params.latlon.split(',');
      // console.log(req.params);
      const weather_url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&aqi=yes&q=${latlon[0]},${latlon[1]}`;

      const res_weather = await fetch(weather_url);
      const forecast = await res_weather.json();
      res.json(forecast);
});

app.get('/geo_map/:latlon',(req,res)=>{
      res.sendFile(__dirname+'/public/html/map.htm');
});


app.get('/view-checkins',(req,res)=>{
      res.sendFile(__dirname+'/public/html/checkins.htm');
})












// Port//

app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
});