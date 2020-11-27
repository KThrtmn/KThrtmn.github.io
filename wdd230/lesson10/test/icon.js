const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";


//put as function, add loop to get multible icons
//icons permater

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
 
        
        const weatherIcon = document.querySelector("#icon");
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);



    });

    for (let i=0; i<=weather.length; i++)
    {
        weather[i].description;
    }