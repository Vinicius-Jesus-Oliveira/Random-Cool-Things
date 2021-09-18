const data = [
    {
        "date": "18/09",
        "weekday": "Sab",
        "max": 30,
        "min": 22,
        "temp": 26,
        "rainChance": 8,
        "humidity": 68,
        "windSpeedy": 13,
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

console.log(data);

let maxima = 0, minima = 100;

data.forEach((el) => {
    if (el.max > maxima)
        maxima = el.max;
    if (el.min < minima)
        minima = el.min;
});

document.querySelector("#today > i").classList.add("far", "fa-sun");
document.getElementById("today-temp").innerHTML = data[0].temp + "°C";
document.getElementById("today-description").innerHTML = data[0].description;

/*
const difference = maxima - minima;
const divWeekWeather = document.querySelector(".week-weather");

for (let i = 0; i < 7; i++) {
    const divDia = document.createElement("div"),
            pDate = document.createElement("p"),
            pWeekDay = document.createElement("p"),
            divTemperatura = document.createElement("div"),
            divTermomether = document.createElement("div"),
            pMax = document.createElement("p"),
            pMin = document.createElement("p");

    const max = clima[i].max,
            min = clima[i].min,
            height = (max - min) * 100 / difference,
            top = (maxima - max) * 100 / difference,
            bottom = (min - minima) * 100 / difference;

    divDia.classList.add("dia", clima[i].weekday);

    pDate.innerHTML = clima[i].date;

    if (i === 0)
        pWeekDay.innerHTML = "Hoje";
    else
        pWeekDay.innerHTML = clima[i].weekday;

    pWeekDay.classList.add("week-weather-date");

    divDia.appendChild(pDate);
    divDia.appendChild(pWeekDay);
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

    divWeekWeather.appendChild(divDia);
}*/
/*
const time = 5000;

function next() {
    const show = $(".info.show")[0];

    if (show.nextElementSibling.classList.contains("info")) {
        show.nextElementSibling.classList.add("show");
        show.classList.remove("show");
    } else {
        $(".group .info")[0].classList.add("show");
        show.classList.remove("show");
    }

    setIntervalWeather();
}

function previous() {
    const show = $(".info.show")[0];
    const all = $(".group .info");

    if (show.previousElementSibling.classList.contains("info")) {
        show.previousElementSibling.classList.add("show");
        show.classList.remove("show");
    } else {
        all[all.length - 1].classList.add("show");
        show.classList.remove("show");
    }

    setIntervalWeather();
}

function setIntervalWeather() {
    clearInterval(weatherInterval);

    weatherInterval = setInterval(() => {
        next();
    }, time);      
}

let weatherInterval = setInterval(() => {
    next();
}, time);
*/