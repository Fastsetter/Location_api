






if ('geolocation' in navigator) {
  /* geolocation is available */
  console.log('geolocation is available');


  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(position.coords.latitude);
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;


    // const weather=






    const api_url = `/weather/${lat},${lon}`;

    const res = await fetch(api_url);
    const forecast_res = await res.json();
    const des = forecast_res.current;

    // console.log(forecast.forecastday[0].hour[0].condition.text);
    const temp = forecast_res.forecast.forecastday[0].day;
    // console.log(forecast_res);
    // console.log(temp);
    document.querySelector('.weather').textContent = temp.maxtemp_c;


    document.querySelector('.description').textContent = des.condition.text;

    document.querySelector('.feelslike').textContent = des.feelslike_c;

    document.querySelector('.aqi').textContent = des.air_quality['us-epa-index'];

    document.querySelector('.ctemp').textContent = des.temp_c;

    document.querySelector('.lupdated').textContent = des.last_updated;



    let maxtemp_c = temp.maxtemp_c;
    let text = des.condition.text;
    // console.log(feels_like);
    const data = { lat, lon, maxtemp_c, des }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data)
    }

    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);


   

    //leaflet END//

    




  });




} else {
  /* geolocation IS NOT available */
  console.log('geolocation not available');
}
