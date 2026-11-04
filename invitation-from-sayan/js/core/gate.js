var gate=document.getElementById("gate");
[[gate.children[0],[4,16,28,40,52,64,76,88]],[gate.children[1],[10,22,34,46,58,70,82,94]]].forEach(function(a){a[1].forEach(function(x,i){var g=document.createElement("div");g.className="gl";g.style.cssText="left:"+x+"%;height:"+(9+(i%3)*5)+"vmin;animation-delay:-"+(i*.45)+"s";a[0].appendChild(g)})});
for(var q=0;q<16;q++){var pe=document.createElement("i");pe.className="gp";pe.style.cssText="left:"+Math.random()*98+"%;animation-duration:"+(7+Math.random()*7)+"s;animation-delay:-"+Math.random()*10+"s";gate.appendChild(pe)}
gate.addEventListener("click",function(){if(opened)return;opened=true;gate.classList.add("open");document.body.classList.add("opened");setTimeout(function(){pgs[0].classList.add("in")},1200);
if(au.paused){au.volume=0;var r=au.play();if(r&&r.then)r.then(function(){done=true;want=true;mus.classList.add("on");fade();rm()}).catch(function(){})}else if(!done){done=true;rm()}
setTimeout(function(){gate.style.display="none"},3800)});
