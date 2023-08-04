import { hotels1 } from "./hotels.js";


const summary = document.querySelector(".summary");
console.log(summary)
summary.textContent = "All sizes hotels of all category prices, in all countries.";

document.addEventListener("DOMContentLoaded", async () =>{
    const hotels = await hotels1();
    const data = await hotels.json();
    console.log(data)
    data.forEach(hotel => {
        const div = document.createElement('div');
        div.className = "card";
        div.innerText = `${hotel.name} ${hotel.country}`;
        var photo = hotel.photo;
        div.style.backgroundImage = `url(${photo})`;

        document.querySelector("main").appendChild(div)
    });
});
