var mb=document.getElementById("mb");mb.onclick=function(e){e.preventDefault();var u=mb.href,w=null;try{w=window.open(u,"_blank")}catch(x){}
if(!w){try{window.top.location.href=u}catch(x){}try{navigator.clipboard.writeText(u)}catch(x){}document.getElementById("mh").style.opacity=1}};
