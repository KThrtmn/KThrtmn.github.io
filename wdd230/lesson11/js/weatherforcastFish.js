var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        //selecting html container by id, naming it a constant
        //weather
        const curtemp = document.querySelector("#current-temp");
        const high = document.querySelector("#high");
        const hum = document.querySelector("#humidity");
        const wind = document.querySelector("#windSpeed");
        const chill = document.querySelector("#chill");
        //jsObject.main.temp more secure... perfered
        curtemp.innerHTML = jsObject.main.temp;
        high.innerHTML = jsObject.main.temp_max;
        hum.innerHTML = jsObject.main.humidity;
        wind.innerHTML = jsObject.wind.speed;
        //innerHTML will work the same in the case...
        chill.textContent = getWindChill(jsObject.wind.speed, jsObject.main.temp);
    });

function getWindChill(wind, curtem) {
    if (curtem <= 50 && wind > 3.0) {
        var chill = (35.75 + (0.6215 * curtem)) -
            (35.75 * Math.pow(wind, 0.16)) +
            (0.42575 * curtem * Math.pow(wind, 0.16));
        chill = Math.round(chill);
        return chill;
    } else
        return 'N/A';
}



var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const weatherIcon = document.querySelector("#icon");
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        //console.log(forecast);
        var daysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];


        for (let i = 0; i <= forecast.length - 1; i++) {
            var temp = forecast[i].main.temp;
            var date1 = new Date(forecast[i].dt_txt);
            //console.log(date1);
            var weekDay = daysOfTheWeek[date1.getDay()];
            //console.log(weekDay);

            weekDay = document.querySelector("#weekDay" + (i + 1).toString());
            weekDay.innerHTML = daysOfTheWeek[date1.getDay()];

            temp = document.querySelector("#currentTemp" + (i + 1).toString());
            temp.innerHTML = forecast[i].main.temp;

            data = forecast[i].weather[0].icon;


            getIcon(data, i);
        }

    });




//put as function, add loop to get multible icons
//icons permater



function getIcon(data, index) {



    //selecting html id, naming constent
    //const curtemp = document.querySelector("#current-temp");
    const iconSource = document.querySelector("#imagesrc");
    const weatherIcon = document.querySelector("#icon" + (index + 1).toString());

    //pathing to infomation from constent
    // curtemp.innerHTML = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + data + '.png';
    //console.log(imagesrc);

    weatherIcon.setAttribute('src', imagesrc);

    //in a loop
    index.toString() + "#icon" + (index + 1).toString();

    //console.log("#icon" + (index + 1).toString());


    // document.getElementById('imagesrc').textContent = imagesrc;
    //document.getElementById('icon').setAttribute('src', imagesrc);
    //document.getElementById('icon').setAttribute('alt', desc);

}


//getIcon();