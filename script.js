const api ={
    key:"ab4d894fba0c0ee34a6a90f7b2925e40",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchBox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now)

    let temp= document.querySelector('.current .temp');
    console.log(temp)
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C<span>`;

    
    
}

function dateBuilder(d){
    let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;
}