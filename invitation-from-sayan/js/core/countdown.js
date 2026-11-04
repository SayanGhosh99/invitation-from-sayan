function cd(){var d=new Date(2026,11,15,19)-new Date();if(d<0)d=0;var s=Math.floor(d/1000),x=[["Days",Math.floor(s/86400)],["Hrs",Math.floor(s%86400/3600)],["Min",Math.floor(s%3600/60)],["Sec",s%60]];
document.getElementById("cd").innerHTML=x.map(function(a){return"<div><b>"+a[1]+"</b><small>"+a[0]+"</small></div>"}).join("")}cd();setInterval(cd,1000);
