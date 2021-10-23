//////////////////////////////////////////////////
// Subj:   Coding Dojo > Web Fundamentals > HTML/CSS/JS
// 
// By:     Virgilio D. Cabading Jr.    
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// VARIABLE DECLERATION

//////////////////////////////////////////////////
// FUNCTIONS

function removeCookieBar () {                           // Removes the cookie bar
    document.getElementById("cookie-bar"). remove();
}

function updateTemperature (element)    {               // Updates the temperature to Farenheit or Celsius
    if (element.value == "°F") {
        document.getElementById("today-high-temp").innerText = "75°F";
        document.getElementById("today-low-temp").innerText = "65°F";
        document.getElementById("tomorrow-high-temp").innerText = "80°F";
        document.getElementById("tomorrow-low-temp").innerText = "66°F";
        document.getElementById("friday-high-temp").innerText = "69°F";
        document.getElementById("friday-low-temp").innerText = "61°F";
    } else {
        document.getElementById("today-high-temp").innerText = "24°C";
        document.getElementById("today-low-temp").innerText = "18°C";
        document.getElementById("tomorrow-high-temp").innerText = "27°C";
        document.getElementById("tomorrow-low-temp").innerText = "19°C";
        document.getElementById("friday-high-temp").innerText = "21°C";
        document.getElementById("friday-low-temp").innerText = "16°C";

    }
}