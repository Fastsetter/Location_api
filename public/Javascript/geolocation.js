window.onload=function() {
  const geoSuccess=function(position){
    if ('geolocation' in navigator) {
      /* geolocation is available */
      console.log('geolocation is available');
  
  
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(position.coords.latitude);
        document.getElementById('latitude').textContent = lat.toFixed(4);
        document.getElementById('longitude').textContent = lon.toFixed(4);
  
        const api_url = `/weather/${lat},${lon}`;
  
        const res = await fetch(api_url);
        const forecast_res = await res.json();
        const des = forecast_res.current;
  
        console.log(forecast_res.current.humidity);
        const temp = forecast_res.forecast.forecastday[0].day;
        // console.log(forecast_res);
        // console.log(temp);
        document.querySelector('.weather').textContent = temp.maxtemp_c;
  
        document.querySelector('.country').textContent = forecast_res.location.country;
  
        document.querySelector('#name').textContent = forecast_res.location.name;
  
        document.querySelector('.description').textContent = des.condition.text;
  
        document.querySelector('.feelslike').textContent = des.feelslike_c;
  
        // document.querySelector('.aqi').textContent = des.air_quality['us-epa-index'];
  
        document.querySelector('.ctemp').textContent = des.temp_c;
  
        document.querySelector('.lupdated').textContent = des.last_updated;
  
        document.querySelector('.precip').textContent = des.precip_mm;
  
  
        document.querySelector('.humidity').textContent = des.humidity;
  
        document.querySelector('.wind').textContent = des.wind_kph;
  
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
    }

  }
  
  

  const geoError=function (error) {
    console.log('Error occurred. Error code:'+error.code);

    if(error.code===1){
      alert('permission denied');
    }
    if(error.code===2){
      alert('position unavailable (error response from location provider)');
    }
    if(error.code===3){
      alert('timed out');
    }
    if(error.code===0){
      alert('unknown error');
    }


  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};













