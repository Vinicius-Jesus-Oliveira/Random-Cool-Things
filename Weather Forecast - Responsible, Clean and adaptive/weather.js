const data = [
    {
        "date": "18/09",
        "weekday": "Sab",
        "max": 30,
        "min": 22,
        "temp": 26,
        "rainChance": 8,
        "humidity": 68,
        "windSpeedy": "13 km/h",
        "sunset": "18:07",
        "sunrise": "06:02",
        "description": "Dia ensolarado",
        "condition": "rain"
    },
    {
        "date": "19/09",
        "weekday": "Dom",
        "max": 31,
        "min": 18,
        "condition": "cloudly_day"
    },
    {
        "date": "20/09",
        "weekday": "Seg",
        "max": 34,
        "min": 18,
        "condition": "cloud"
    },
    {
        "date": "21/09",
        "weekday": "Ter",
        "max": 35,
        "min": 17,
        "condition": "rain"
    },
    {
        "date": "22/09",
        "weekday": "Qua",
        "max": 19,
        "min": 13,
        "condition": "rain"
    },
    {
        "date": "23/09",
        "weekday": "Qui",
        "max": 23,
        "min": 13,
        "condition": "clear_day"
    },
    {
        "date": "24/09",
        "weekday": "Sex",
        "max": 27,
        "min": 15,
        "condition": "rain"
    },
    {
        "date": "25/09",
        "weekday": "Sab",
        "max": 23,
        "min": 15,
        "condition": "rain"
    },
    {
        "date": "26/09",
        "weekday": "Dom",
        "max": 25,
        "min": 17,
        "condition": "rain"
    },
    {
        "date": "27/09",
        "weekday": "Seg",
        "max": 26,
        "min": 17,
        "condition": "rain"
    }
];

const today = data[0];

console.log(data);

let maxima = 0, minima = 100;

data.forEach((el) => {
    if (el.max > maxima)
        maxima = el.max;
    if (el.min < minima)
        minima = el.min;
});

todayIcon.classList.add("far", "fa-sun");
temp.innerHTML = today.temp + "°C";
description.innerHTML = today.description;

rain.querySelector("p").innerHTML = today.rainChance + "%";
humidity.querySelector("p").innerHTML = today.humidity + "%";
wind.querySelector("p").innerHTML = today.windSpeedy;
sunset.querySelector("p").innerHTML = today.sunset;
sunrise.querySelector("p").innerHTML = today.sunrise;

const difference = maxima - minima;

for (let i = 0; i < 7; i++) {
    const divDia = document.createElement("div"),
          pDate = document.createElement("p"),
          strongWeekDay = document.createElement("strong"),
          divTemperatura = document.createElement("div"),
          divTermomether = document.createElement("div"),
          pMax = document.createElement("p"),
          pMin = document.createElement("p");

    const max = data[i].max,
          min = data[i].min,
          top = (maxima - max) * 100 / difference,
          bottom = (min - minima) * 100 / difference;

    divDia.classList.add("day", data[i].weekday);

    pDate.innerHTML = data[i].date;

    if (i === 0)
        strongWeekDay.innerHTML = "Hoje";
    else
        strongWeekDay.innerHTML = data[i].weekday;

    strongWeekDay.classList.add("week-weather-date");

    divDia.appendChild(pDate);
    divDia.appendChild(strongWeekDay);
    divDia.appendChild(divTemperatura);
    
    pMax.innerHTML = max;
    pMax.classList.add("temp-max");

    pMin.innerHTML = min;
    pMin.classList.add("temp-min");

    divTermomether.style.top = top + "%";
    divTermomether.style.bottom = bottom + "%";
    divTermomether.classList.add("termometer");
    divTermomether.appendChild(pMax);
    divTermomether.appendChild(pMin);

    divTemperatura.className = "temperatura";
    divTemperatura.appendChild(divTermomether);

    week.appendChild(divDia);
}

function next() {
    const show = document.querySelector("#infos .show");

    if (show.nextElementSibling.tagName === "DIV")
        show.nextElementSibling.classList.add("show");
    else
        document.querySelector("#infos div").classList.add("show");

    show.classList.remove("show");
    
    if (inputTimer.checked)
        setIntervalWeather();
}

function previous() {
    const show = document.querySelector("#infos .show");
    const all = document.querySelectorAll("#infos div");

    if (show.previousElementSibling.tagName === "DIV")
        show.previousElementSibling.classList.add("show");
    else
        all[all.length - 1].classList.add("show");

    show.classList.remove("show");
    
    if (inputTimer.checked)
        setIntervalWeather();
}

const time = 5000;

function setIntervalWeather() {
    clearInterval(weatherInterval);

    weatherInterval = setInterval(() => {
        next();
    }, time);      
}

let weatherInterval = setInterval(() => {
    next();
}, time);

function toggleTimer() {
    if (inputTimer.checked)
        setIntervalWeather();
    else
        clearInterval(weatherInterval);
}
