var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

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

        const iconSource = document.querySelector("#imagesrc");
        const weatherIcon = document.querySelector("#icon");


    
        //ICON//
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

       // document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
       
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



apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //you can use a for each (contains substring) 
        //this is functional programing, arrow function; go through the data
        //and give me every thing that includes '18:00:00' returns 5 data points
        //instead of 40

        const forcast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forcast);

        // = assigns ; == equivelent

        //forcast = [0,1,2,3,4];

        //DAYS OF THE WEEK//

        var daysOfTheWeek = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

        for (let i = 0; i <= forcast.length - 1; i++) {
            forcast[i].main.temp;
            var date1 = new Date(forcast[i].dt_txt);
            //console.log(date1);
            var weekDay = daysOfTheWeek[date1.getDay()];
            //console.log(weekDay);

        }
        
    });