var opened=false,m=document.getElementById("m"),pgs=[].slice.call(document.querySelectorAll(".pg")),dots=document.getElementById("dots");
pgs.forEach(function(p){var a=document.createElement("a");a.href="#"+p.id;a.onclick=function(e){e.preventDefault();p.scrollIntoView({behavior:"smooth"})};dots.appendChild(a)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){var p=e.target,i=pgs.indexOf(p);
if(e.isIntersecting){if(p!==pgs[0]||opened)p.classList.add("in");dots.children[i].classList.add("on")}else{dots.children[i].classList.remove("on");p.classList.remove("in")}})},{root:m,threshold:.6});
pgs.forEach(function(p){io.observe(p)});
