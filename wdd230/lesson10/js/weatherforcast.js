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

        //selecting html id, naming constent

        const curtemp = document.querySelector("#current-temp");
        const high = document.querySelector("#high");
        const hum = document.querySelector("#humidity");
        const wind = document.querySelector("#windSpeed");
        const chill = document.querySelector("#chill");



        //pathing to infomation from constent
        //jsObject.main.temp more secure... perfered
        curtemp.innerHTML = jsObject.main.temp;
        high.innerHTML = jsObject.main.temp_max;
        hum.innerHTML = jsObject.main.humidity;
        wind.innerHTML = jsObject.wind.speed;

      //innerHTML will work the same in the case...
        chill.textContent = getWindChill(jsObject.wind.speed, jsObject.main.temp);
    
    });



    
    function getWindChill (wind,curtem){

        if (curtem <= 50 && wind > 3.0) {
            var chill = (35.75 + (0.6215 * curtem)) -
                (35.75 * Math.pow(wind, 0.16)) +
                (0.42575 * curtem * Math.pow(wind, 0.16));
        
            chill = Math.round(chill);

            return chill;
        
           // document.getElementById("chill").innerHTML = chill + '&#176;';
        
        } else
            return 'N/A';
           // document.getElementById("chill").innerHTML = 'N/A';
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

        //get day of the week

       var daysOfTheWeek = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
        


        for (let i=0; i<=forcast.length-1; i++)
    {
        forcast[i].main.temp;
        var date1 = new Date (forcast[i].dt_txt);
        //console.log(date1);
        var weekDay = daysOfTheWeek[date1.getDay()];
        //console.log(weekDay);
        
    }

    });


    



            