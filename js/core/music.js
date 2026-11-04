var au=document.getElementById("au"),mus=document.getElementById("mus"),ml={style:{}},want=false,done=false;
function fade(){au.volume=0;var v=0,x=setInterval(function(){v=Math.min(.7,v+.035);au.volume=v;if(v>=.7)clearInterval(x)},150)}
function setM(on){want=on;mus.classList.toggle("on",on);if(on){var r=au.play();if(r&&r.catch)r.catch(function(){mus.classList.remove("on");want=false;ml.style.opacity=1});ml.style.opacity=0}else au.pause()}
var EV=["pointerdown","pointerup","touchstart","touchend","click","keydown","wheel","scroll"];
function rm(){EV.forEach(function(n){document.removeEventListener(n,first,true)})}
function first(e){if(done||(e.target&&e.target.closest&&e.target.closest("#mus")))return;if(!au.paused){done=true;rm();return}au.volume=0;var r=au.play();if(r&&r.then)r.then(function(){done=true;want=true;mus.classList.add("on");fade();rm()}).catch(function(){})}
EV.forEach(function(n){document.addEventListener(n,first,true)});
au.volume=.7;setM(true);
mus.onclick=function(){if(!done){done=true;fade()}setM(au.paused)};
document.addEventListener("visibilitychange",function(){if(document.hidden)au.pause();else if(want)au.play().catch(function(){})});
