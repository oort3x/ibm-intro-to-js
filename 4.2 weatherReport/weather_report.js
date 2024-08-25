var apiKey = 'REMOVED'; // Replace 'YOUR_API_KEY' with your actual API key

function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })


    .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>No valid city name entered.</p>`;
            });

   
}

function getWeatherForLocation() {
    const weatherInfo = document.getElementById('weatherByLocationInfo');

    function handleError(error) {
        weatherInfo.innerHTML = "Error finding location";
        console.error('Error finding location.', error);
      }
     
  
    try {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } catch (err) {
      handleError(err);
    }
  }
  
  function showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&long=${long}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        weatherInfo.innerHTML = `<h2>Weather at ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
      });
  }
  
 

//attaches an event listener to the 'weatherForm' element, listening for a 'submit' event and triggering the showweatherDetails function upon form submission, enabling customized handling or manipulation of the form's behavior.
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

document.getElementById('weatherByLocationForm').addEventListener('submit',getWeatherForLocation );