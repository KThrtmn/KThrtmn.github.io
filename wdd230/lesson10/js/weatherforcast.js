/*****var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

//icon from weather qurey selecter, similar to get day and windchill, use firefox for api data, make qurey/ fetch call into funtion , call in the weather
//

/* weather api call
*   way to get the icon from json
*   call icon function and pass the icon into the function

function iconapicall (icon)
* {
    icon api call

    querey html emelent.innhtml = whatever img you get back from the response
}
*/

/** 
fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);


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

//WIND CHILL//
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

//console.log(getWindChill(4, 20));
*/

apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //you can use a for each (contains substring) 
        //this is functional programing, arrow function; go through the data
        //and give me every thing that includes '18:00:00' returns 5 data points
        //instead of 40

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);

        // = assigns ; == equivelent

        //forcast = [0,1,2,3,4];

        //DAYS OF THE WEEK//

        var daysOfTheWeek = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
        var forecastParent = document.querySelector(".forecast div");

        for (let i = 0; i <= forecast.length - 1; i++) {
            var temp = forecast[i].main.temp;
            var date1 = new Date(forecast[i].dt_txt);
            //console.log(date1);
            var weekDay = daysOfTheWeek[date1.getDay()];
            //console.log(weekDay);

            const icon = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            
            
            let forecast = document.createElement('div');
            let pday = document.createElement('p');
            let ptemp = document.createElement('p');
            let image = document.createElement('img');
            image.src = icon;
            image.alt = forecast[i].weather[0].description;

            pday.innerHTML = weekDay;
            ptemp.innerHTML = temp;


            forecast.appendChild(pday);
            forecast.appendChild(image);
            forecast.appendChild(ptemp);

            forecastParent.appendChild(forecast)


        };
    })
});

