var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in n){var d=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,d.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=d);let r=0,o=document.querySelector(".header");window.addEventListener("scroll",(()=>{let e=window.pageYOffset||document.documentElement.scrollTop;o.style.top=e>r?"-228px":"0",r=e})),d("diFfB"),d("fHyLY");var i=d("lthku"),c=d("f4Zwh"),l=d("diFfB");const s=document.querySelector(".button-watched"),a=document.querySelector(".button-queue"),u=document.querySelector(".library-watched"),h=document.querySelector(".library-queue"),f=document.querySelector("#gallery"),g=document.querySelector(".travolta-gif"),w=document.querySelector(".scott-gif"),L=document.querySelector("#toggle-btn");function y(){0===i.watched.length&&(h.classList.add("is-hidden"),u.classList.remove("is-hidden"),g.scrollIntoView()),(f.innerHTML=i.queue)&&(f.innerHTML="",h.classList.add("is-hidden")),i.watched,i.watched.forEach((e=>{(0,c.fetchID)(e).then((e=>{const t=e.genres.map((e=>e.id));e.genre_ids=t,(0,l.renderMovies)([e])})).catch((e=>console.log(e)))})),s.innerHTML=`WATCHED: ${i.watched.length}`,L.play()}s.addEventListener("click",y),a.addEventListener("click",(function(){0===i.queue.length&&(u.classList.add("is-hidden"),h.classList.remove("is-hidden"),w.scrollIntoView());(f.innerHTML=i.watched)&&(f.innerHTML="",u.classList.add("is-hidden"));i.queue,i.queue.forEach((e=>{(0,c.fetchID)(e).then((e=>{const t=e.genres.map((e=>e.id));e.genre_ids=t,(0,l.renderMovies)([e])})).catch((e=>console.log(e)))})),a.innerHTML=`QUEUE: ${i.queue.length}`,L.play()})),window.addEventListener("load",(()=>{y(),a.innerHTML=`QUEUE: ${i.queue.length}`})),a.addEventListener("click",(()=>{s.classList.remove("active")}));
//# sourceMappingURL=my-library.af9ddac8.js.map