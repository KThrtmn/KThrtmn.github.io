//Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
//do I need to sep parms?, intellasense?//


var temp = parseInt(document.getElementById("current").innerHTML);
var wind = parseInt(document.getElementById("windSpeed").innerHTML);



/**
 * Calculation of windchill if conditions are met
 */
if (temp <= 50 && wind > 3.0) {
    var chill = (35.75 + (0.6215 * temp)) -
        (35.75 * Math.pow(wind, 0.16)) +
        (0.42575 * temp * Math.pow(wind, 0.16));

    chill = Math.round(chill);

    document.getElementById("chill").innerHTML = chill + '&#176;';

} else
    document.getElementById("chill").innerHTML = 'N/A';
