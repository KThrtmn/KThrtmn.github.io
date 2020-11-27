const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";

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

        for (let i=0; i<=forcast.length-1; i++)
    {
       console.log(forcast[i].main.temp);

    }

    });


//forcast.length allows for flexability in coding

    

