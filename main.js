(()=>{const e=document.querySelector(".celsius"),t=document.querySelector(".fahr"),n=document.querySelector(".loading"),o=document.querySelector(".weather-card"),c=document.querySelector(".temp"),r=document.querySelector(".feels-like");let i;function s(){const e=document.querySelector(".search-text").value;""!==e&&a(e)}async function a(e){try{n.style.display="block",o.style.display="none";const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=acbf276018dff8bc22038492e6e32b85`,{mode:"cors"}),c=await t.json();i=function(e){return{tempInCelsius:e.main.temp,feelsLike:e.main.feels_like,humidity:e.main.humidity,pressure:e.main.pressure,description:e.weather[0].description,icon:e.weather[0].icon,country:e.sys.country,city:e.name}}(c),function(e){const t=document.querySelector(".country"),c=document.querySelector(".humidity"),r=document.querySelector(".pressure"),i=document.querySelector(".desc"),s=document.querySelector(".weather-icon");t.textContent=`${e.city}, ${e.country}`,"tempUnit"in localStorage&&"celsius"!==localStorage.getItem("tempUnit")?u():l(),c.textContent=`${e.humidity}%`,r.textContent=`${e.pressure}hPa`,i.textContent=`${e.description}`,s.src=`http://openweathermap.org/img/wn/${e.icon}@2x.png`,n.style.display="none",o.style.display="block"}(i),localStorage.setItem("lastSearchedCity",e),document.querySelector("#searchError").textContent=""}catch(e){document.querySelector("#searchError").textContent="Location not found!",n.style.display="none",o.style.display="block"}}function l(){localStorage.setItem("tempUnit","celsius"),document.querySelector(".celsius").classList.add("btn-active"),document.querySelector(".fahr").classList.remove("btn-active"),c.textContent=`${i.tempInCelsius}°`,r.textContent=`${i.feelsLike}°`}function u(){const e=d(i.tempInCelsius),t=d(i.feelsLike);localStorage.setItem("tempUnit","fahr"),document.querySelector(".celsius").classList.remove("btn-active"),document.querySelector(".fahr").classList.add("btn-active"),c.textContent=`${e}°`,r.textContent=`${t}°`}function d(e){return Math.round(9*e/5+32)}window.onload=function(){"lastSearchedCity"in localStorage?a(localStorage.getItem("lastSearchedCity")):a("Lagos"),document.querySelector(".search-btn").addEventListener("click",s),e.addEventListener("click",l),t.addEventListener("click",u)}})();