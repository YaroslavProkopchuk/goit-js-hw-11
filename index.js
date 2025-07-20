import{a as f,S as m,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="51403158-2e3095c4822824a544700ea8f";async function h(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(y,{params:r})).data}catch(o){throw console.error("Pixabay request error:",o),o}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a");function S(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p>👍 ${t}</p>
            <p>👁️ ${i}</p>
            <p>💬 ${p}</p>
            <p>⬇️ ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}function q(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),P=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(r===""){a.warning({message:"Please enter a search term!",position:"topRight"});return}b(),q();try{const o=await h(r),{hits:n}=o;n.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):S(n)}catch{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
