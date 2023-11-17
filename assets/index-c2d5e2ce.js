(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".container"),p=document.querySelector(".search-box button"),a=document.querySelector(".weather-box"),i=document.querySelector(".weather-details"),o=document.querySelector(".not-found");p.addEventListener("click",()=>{const d="9170747dcd28abb48995cb96ccbf0aaa",n=document.querySelector(".search-box input").value;n!==""&&fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&appid=${d}`).then(r=>r.json()).then(r=>{if(r.cod==="404"){l.style.height="400px",a.style.display="none",i.style.display="none",o.style.display="block",o.classList.add("fadeIn");return}o.style.display="none",o.classList.remove("fadeIn");const s=document.querySelector(".weather-box img"),e=document.querySelector(".weather-box .temperature"),t=document.querySelector(".weather-box .description"),c=document.querySelector(".weather-details .humidity span"),u=document.querySelector(".weather-details .wind span");switch(r.weather[0].main){case"Clear":s.src="./images/clear.png";break;case"Rain":s.src="./images/rain.png";break;case"Snow":s.src="./images/snow.png";break;case"Clouds":s.src="./images/cloud.png";break;case"Haze":s.src="./images/mist.png";break;default:s.src=""}e.innerHTML=`${parseInt(r.main.temp)}<span>°C</span>`,t.innerHTML=`${r.weather[0].description}`,c.innerHTML=`${r.main.humidity}%`,u.innerHTML=`${parseInt(r.wind.speed)}Km/h`,a.style.display="",i.style.display="",a.classList.add("fadeIn"),i.classList.add("fadeIn"),l.style.height="590px"})});