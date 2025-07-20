import{a as d,S as m,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="51403158-2e3095c4822824a544700ea8f";async function h(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(y,{params:r})).data}catch(o){throw console.error("Pixabay request error:",o),o}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a");function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:p,downloads:f})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p>👍 ${t}</p>
            <p>👁️ ${n}</p>
            <p>💬 ${p}</p>
            <p>⬇️ ${f}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){c.innerHTML=""}function S(){l.classList.add("visible")}function q(){l.classList.remove("visible")}const u=document.querySelector(".form"),w=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async i=>{i.preventDefault();const r=w.value.trim();if(r===""){a.warning({message:"Please enter a search term!",position:"topRight"});return}v(),S();try{const o=await h(r),{hits:s}=o;s.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(s)}catch{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
