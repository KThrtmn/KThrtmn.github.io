const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";



fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //selecting html id, naming constent

        const curtemp = document.querySelector("#current-temp");
        const high = document.querySelector("#high");
        const hum = document.querySelector("#humidity");
        const wind = document.querySelector("#windSpeed");



        //pathing to infomation from constent
        
        curtemp.innerHTML = jsObject.main.temp;
        high.innerHTML = jsObject.main.temp_max;
        hum.innerHTML = jsObject.main.humidity;
        wind.innerHTML = jsObject.wind.speed;



/** 
 * calculate windchill
 * 
        const curtemp = parseInt(document.getElementById("#current-temp").innerHTML);
        const wind = parseInt(document.getElementById("#windSpeed").innerHTML);

        if (curtemp <= 50 && wind > 3.0) {
            var chill = (35.75 + (0.6215 * curtemp)) -
                (35.75 * Math.pow(wind, 0.16)) +
                (0.42575 * curtemp * Math.pow(wind, 0.16));
        
            chill = Math.round(chill);
        
            document.getElementById("chill").innerHTML = chill + '&#176;';
        
        } else
            document.getElementById("chill").innerHTML = 'N/A';

*/
    });