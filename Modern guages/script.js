const data = [
    {
        percentage: 50,
    },
    {
        percentage: 12,
    },
    {
        percentage: 88,
    }
];

const guages_container = document.getElementById("guages-container");

data.forEach((el) => {
    const guage = document.createElement("div"),
          guage_inner = document.createElement("div"),
          guage_animation = document.createElement("div"),
          gauge_color = document.createElement("div");

    guage.classList.add("guage");
    guage_inner.classList.add("guage-inner");
    gauge_color.classList.add("guage-color");
    guage_animation.classList.add("guage-animation");

    guage_inner.innerHTML = el.percentage + "%";

    gauge_color.style.background = `conic-gradient(var(--gauge-color) 0% ${el.percentage}%, transparent ${el.percentage}% 100%)`;

    guage_inner.appendChild(guage_animation);
    guage.appendChild(gauge_color);
    guage.appendChild(guage_inner);

    guages_container.appendChild(guage);
});

Array.from(document.querySelectorAll(".guage-animation")).forEach((el, i) => {
    el.style.animationDuration = Math.floor(Math.random() * 8 + 5) + "s";
});