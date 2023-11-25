export function writeDOM(weatherObject) {
  document.getElementById('location').innerHTML = `${weatherObject.name}, ${weatherObject.country}`;
  document.getElementById('condition').innerHTML = weatherObject.condition;
  document.getElementById('temperature').innerHTML = `${weatherObject.temperature_c}°C | ${weatherObject.temperature_f}°F`;
  document.getElementById('humidity').innerHTML = `Humidity: ${weatherObject.humidity} %`;
  document.getElementById('wind-speed').innerHTML = `Wind Speed: ${weatherObject.windspeed} km/hr`;
}

export async function getData(key, location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, { mode: 'cors' });
    const weatherData = await response.json();
    const weatherObject = {
      name: weatherData.location.name,
      country: weatherData.location.country,
      condition: weatherData.current.condition.text,
      temperature_c: weatherData.current.temp_c,
      temperature_f: weatherData.current.temp_f,
      windspeed: weatherData.current.wind_kph,
      humidity: weatherData.current.humidity,
    };
    // I can't index properties of weatherObject outside the async function, so this will have to do
    writeDOM(weatherObject);
    return weatherObject;
  } catch (error) {
    alert('Enter a valid location');
  }
}

export function search(KEY) {
  const search = document.getElementById('search');
  getData(KEY, search.value);
  search.value = '';
}

export default {
  writeDOM,
  getData,
  search,
};
