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
        console.log("Farenheit");
        document.getElementById("today-high-temp").innerText = "75°F";
        document.getElementById("today-low-temp").innerText = "65°F";
        document.getElementById("tomorrow-high-temp").innerText = "80°F";
        document.getElementById("tomorrow-low-temp").innerText = "66°F";
    } else {
        console.log("Celsius");
        document.getElementById("today-high-temp").innerText = "24°C";
        document.getElementById("today-low-temp").innerText = "18°C";
        document.getElementById("tomorrow-high-temp").innerText = "27°C";
        document.getElementById("tomorrow-low-temp").innerText = "19°C";
    }
}