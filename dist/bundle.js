(()=>{"use strict";function e(e,t){const n=document.createElement("div"),o=document.createElement("h5"),c=document.createElement("p");n.appendChild(o),n.appendChild(c),t.appendChild(n),o.innerText=e.username,c.innerText=e.content}function t(e,t){fetch(e).then((e=>e.json())).then(t)}const n=document.querySelector(".article-list");function o(e){n.innerText="";for(const t of e)console.log(t),c(t)}function c(o){const c=document.createElement("div"),i=document.createElement("h3"),d=document.createElement("p");c.appendChild(i),c.appendChild(d),n.appendChild(c),i.innerText=o.title,d.innerText=o.content,t(`https://simple-json-server-scit.herokuapp.com/comments?postId=${o.id}`,(t=>{console.log(t),function(t,n){const o=document.createElement("div");o.style.paddingLeft="20px";for(const n of t)e(n,o);n.appendChild(o)}(t,c)}))}console.log("javascript-AJAX-CRUD-homework-solution-modularization"),document.getElementById("get-data").addEventListener("click",(()=>{t("https://simple-json-server-scit.herokuapp.com/posts",o)}))})();