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
        div.id = `${hotel.name}`;
        const photo = hotel.photo;
        div.style.backgroundImage = `url(${photo})`;
        document.querySelector("main").appendChild(div)

       
        const h2 = document.createElement('h2');
        h2.innerText = `${hotel.name}`;
        h2.className = "hotelName";
        document.getElementById(`${hotel.name}`).appendChild(h2);

        if(hotel.country === "Argentina"){
            const img = new Image(20, 20);
            img.src= "./imagens/argentina.png";
            const country = document.createElement('p');
            country.className = "country";
            country.innerHTML = `${img.outerHTML}   ${hotel.country}`;
            document.getElementById(`${hotel.name}`).appendChild(country);
        }else if(hotel.country === "Brasil"){
            const img = new Image(20, 20);
            img.src= "./imagens/brasil.png";
            const country = document.createElement('p');
            country.className = "country";
            country.innerHTML = `${img.outerHTML}   ${hotel.country}`;
            document.getElementById(`${hotel.name}`).appendChild(country);
        }else if(hotel.country === "Chile"){
            const img = new Image(20, 20);
            img.src= "./imagens/chile.png";
            const country = document.createElement('p');
            country.className = "country";
            country.innerHTML = `${img.outerHTML}   ${hotel.country}`;
            document.getElementById(`${hotel.name}`).appendChild(country);
        }else if(hotel.country === "Uruguay"){
            const img = new Image(20, 20);
            img.src= "./imagens/uruguay.png";
            const country = document.createElement('p');
            country.className = "country";
            country.innerHTML = `${img.outerHTML}   ${hotel.country}`;
            document.getElementById(`${hotel.name}`).appendChild(country);
        }
        
        const rooms = document.createElement('p');
        rooms.className = "rooms";
        document.getElementById(`${hotel.name}`).appendChild(rooms);
        var price = hotel.price;
        if(price == 1) {
            rooms.innerText = `${hotel.rooms} rooms - $`
        }else if (price == 2) {
            rooms.innerText = `${hotel.rooms} rooms - $$`
        }else if(price == 3) {
            rooms.innerText = `${hotel.rooms} rooms - $$$`
        }else if(price == 4) {
            rooms.innerText = `${hotel.rooms} rooms - $$$$`
        }

        const inner_card1 = document.createElement('div');
        inner_card1.className = "inner-card1";
        document.getElementById(`${hotel.name}`).appendChild(inner_card1);
        
    });
});
