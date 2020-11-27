const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=1adc67f3362ce5c5a328dbdb8e4aab65";


//put as function, add loop to get multible icons
//icons permater

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const icon = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';

        
        for(let i = 0; i<icon.length; i++){

            weather[i].description;

            let forecast = document.createElement('section');
            let image = document.createElement('img');
            let pday = document.createElement('p');
            let ptemp = document.createElement('p');


            //Will I need to inerpolate?
            pday.innerHTML = //output of the day of the week//
            ptemp.inneHTML = //output of the temp//
    
            forecast.appendChild(image);
            forecast.appendChild(p);
        
            }

    });

    