//Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
//do I need to sep parms?, intellasense?//







/**
 * 
 * @param {*} params 
 */
function windchill(params) {
    var temp = ;
    var wind = ;

    //calc?
    //f=35.74+0.6215t−35.75s0.16+0.4275ts0.16

    /**
     * Calculation of windchill
     */
    var chill = (35.75 + (0.6215 * temp)) -
        (35.75 * Math.pow(wind: 0.16)) +
        (0.42575 * temp * Math.pow(wind: 0.16));

        //round number?
    var chill=document.getElementById('chill').innerHTML=chill

}

//display only if winchill is applicable... 

if (temp <= 50 && wind < 3.0)
    //display wind chill (consol log??)
else if
// dont display

// if (!(temp <= 50 && wind < 3.0)
//dont display
