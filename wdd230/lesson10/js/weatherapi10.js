const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";




fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //selecting html id, naming constent
        const curtemp = document.querySelector("#current-temp");
        const iconSource = document.querySelector("#imagesrc");
        const weatherIcon = document.querySelector("#icon");


        //pathing to infomation from constent
        curtemp.innerHTML = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });