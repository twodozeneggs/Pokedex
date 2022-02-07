let pokemonRepository=function(){let e=document.querySelector("#modal-container");function t(){e.classList.remove("is-visible")}window.addEventListener("keydown",n=>{"Escape"===n.key&&e.classList.contains("is-visible")&&t()}),window.addEventListener("click",n=>{n.target===e&&t()});let n=[],o="https://pokeapi.co/api/v2/pokemon/?limit=150";function i(e){n.push(e)}function l(){let e=document.querySelector("main"),t=document.createElement("button");t.innerText="Loading Pokemon List...",t.classList.add("pokemon-Button-Style"),e.appendChild(t)}function c(){let e=document.querySelector("main > button");e.parentElement.removeChild(e)}function s(n){let o=n.detailsUrl;return l(),fetch(o).then(function(e){return e.json()}).then(function(o){c(),function(n){e.innerHTML="";let o=n.types[0].type.name,i=document.createElement("div");i.classList.add("modal"),i.classList.add(o+"-pokemon");let l=document.createElement("button");l.classList.add("btn"),l.innerText="X",l.addEventListener("click",t);let c=document.createElement("h1");c.innerText=n.forms[0].name;let s=document.createElement("p");s.innerText="Height: "+n.height/10+" m";let a=document.createElement("p");a.innerText="Type: "+o;let d=document.createElement("img");d.classList.add("modal-img"),d.src=n.sprites.other["official-artwork"].front_default,i.appendChild(l),i.appendChild(c),i.appendChild(s),i.appendChild(a),i.appendChild(d),e.appendChild(i),e.classList.add("is-visible")}(o),n.imageUrl=o.sprites.front_default,n.height=o.height,n.types=o.types}).catch(function(e){console.error(e)})}function a(e){s(e).then(function(){console.log(e)})}return{add:i,getAll:function(){return n},addListItem:function(e){let t=document.querySelector(".pokemon-list"),n=document.createElement("li"),o=document.createElement("button");o.innerText=e.name,o.classList.add("pokemon-Button-Style","btn","btn-primary"),n.classList.add("group-list-item"),function(e,t){let n=e.detailsUrl;fetch(n).then(function(e){return e.json()}).then(function(e){let n=e.types[0].type.name;t.classList.add(n+"-pokemon")}).catch(function(e){console.error(e)})}(e,o),n.appendChild(o),t.appendChild(n),function(e,t){e.addEventListener("click",a.bind(this,t,e))}(o,e)},loadList:function(){return l(),fetch(o).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){i({name:e.name,detailsUrl:e.url})}),c()}).catch(function(e){c(),console.error(e)})},loadDetails:s,showDetails:a}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});