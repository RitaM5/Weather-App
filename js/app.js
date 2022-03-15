const API_KEY = `ab5f7382d2ba2b3f2ceca41dbee1a453`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; //celcious a convert korte &units=metric add krse.
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
 console.log(temperature);
 setInnerText('city', temperature.name);
 setInnerText('temp', temperature.main.temp);
 setInnerText('condition', temperature.weather[0].main);
//set weather icon
const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
 const imgIcon = document.getElementById('weather-icon');
 imgIcon.setAttribute('src', url);

}