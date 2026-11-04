var c1=document.querySelector('#s1 .col');function gat(){var o="";
function bz(c,t){var u=1-t,a=u*u*u,b=3*u*u*t,d=3*u*t*t,e=t*t*t;return[a*c[0][0]+b*c[1][0]+d*c[2][0]+e*c[3][0],a*c[0][1]+b*c[1][1]+d*c[2][1]+e*c[3][1]]}
function P(T,B,t,s){var p=bz(T,t),q=bz(B,t);return[p[0]+(q[0]-p[0])*s,p[1]+(q[1]-p[1])*s]}
function shp(T,B,n){var e=B[3];if(n){e=[(T[3][0]+B[3][0])/2,(T[3][1]+B[3][1])/2-n]}return"M"+T[0]+"C"+T[1]+" "+T[2]+" "+T[3]+(n?"L"+e+"L"+B[3]:"L"+B[3])+"C"+B[2]+" "+B[1]+" "+B[0]+"Z"}
function line(T,B,s){var d="",k,p;for(k=0;k<=30;k++){p=P(T,B,k/30,s);d+=(k?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)}return d}
function dl(T,B,s,c,w,da){return'<path d="'+line(T,B,s)+'" fill="none" stroke="'+c+'" stroke-width="'+w+'" stroke-linecap="round" stroke-dasharray="'+da+'"/>'}
function fl(x,y,r,c){var s="",k,a;for(k=0;k<5;k++){a=k*1.2566;s+='<circle cx="'+(x+r*Math.cos(a)).toFixed(1)+'" cy="'+(y+r*Math.sin(a)).toFixed(1)+'" r="'+(r*.62).toFixed(1)+'" fill="'+c+'"/>'}return s+'<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(r*.5).toFixed(1)+'" fill="#ffe28a"/>'}
function flr(T,B,s,n,r,a,b){var q="",k,p;for(k=0;k<n;k++){p=P(T,B,a+(b-a)*k/(n-1),s);q+=fl(p[0],p[1],r,"#f5a623")}return q}
function sc(T,B,s,n,r){var d="",k,a,b;for(k=0;k<n;k++){a=P(T,B,k/n,s);b=P(T,B,(k+1)/n,s);d+="M"+a[0].toFixed(1)+" "+a[1].toFixed(1)+"A"+r+" "+r+" 0 0 0 "+b[0].toFixed(1)+" "+b[1].toFixed(1)}return'<path d="'+d+'" fill="none" stroke="#f2b84b" stroke-width="1.7"/>'}
function sw(T,B,s,n,a,b){var q="",k,p;for(k=0;k<n;k++){p=P(T,B,a+(b-a)*k/(n-1),s);q+='<path d="M'+(p[0]-6).toFixed(1)+" "+p[1].toFixed(1)+'a6 6 0 1 1 6 6a3.5 3.5 0 1 1-3.5-3.5" fill="none" stroke="#f2b84b" stroke-width="1.3"/>'}return q}
function dt(T,B,ss,a,b,n,c){var q="",k,i,p;for(i=0;i<ss.length;i++)for(k=0;k<n;k++){p=P(T,B,a+(b-a)*((k*7+i*3)%n)/n+(i%2)*.02,ss[i]);q+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="2" fill="'+c+'"/>'}return q}
var TL=[[0,38],[70,85],[190,150],[335,172]],BL=[[0,182],[100,205],[220,222],[338,218]],
TR=[[398,172],[520,150],[640,100],[735,52]],BR=[[400,208],[520,205],[640,175],[735,118]],
LA=[[345,220],[318,252],[278,296],[252,332]],LB=[[360,228],[345,275],[330,320],[320,372]],
RA=[[382,224],[410,255],[445,295],[478,334]],RB=[[372,232],[398,285],[410,330],[418,376]];
o+='<defs><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a30c14"/><stop offset=".4" stop-color="#e7321d"/><stop offset=".75" stop-color="#c3141b"/><stop offset="1" stop-color="#8c0a11"/></linearGradient>'+
'<linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fdeccb"/><stop offset=".5" stop-color="#f6d9a6"/><stop offset="1" stop-color="#fff1d8"/></linearGradient>'+
'<radialGradient id="gk" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#f04a2a"/><stop offset=".6" stop-color="#c3141b"/><stop offset="1" stop-color="#7d070d"/></radialGradient>'+
'<clipPath id="c1"><path d="'+shp(TL,BL)+'"/></clipPath><clipPath id="c2"><path d="'+shp(TR,BR)+'"/></clipPath><clipPath id="c3"><path d="'+shp(LA,LB,14)+'"/></clipPath><clipPath id="c4"><path d="'+shp(RA,RB,14)+'"/></clipPath></defs>';
o+='<g class="A"><path d="'+shp(LA,LB,14)+'" fill="url(#gc)"/><g clip-path="url(#c3)">'+dl(LA,LB,.1,"#c9824a",1.4,"1 4")+dl(LA,LB,.9,"#c9824a",1.4,"1 4")+dt(LA,LB,[.35,.55,.75],.1,.8,5,"#e08a3a")+'</g>'+
'<path d="'+shp(TL,BL)+'" fill="url(#gr)"/><g clip-path="url(#c1)">'+sc(TL,BL,.17,22,12)+dl(TL,BL,.3,"#f2b84b",1.2,"1 5")+flr(TL,BL,.46,9,5,.08,.95)+dl(TL,BL,.6,"#f2b84b",1.4,"0 4")+sw(TL,BL,.78,12,.08,.95)+dl(TL,BL,.92,"#f2b84b",1.2,"1 4")+'<path d="'+line(TL,BL,.06)+'" stroke="#ff9b6a" stroke-width="8" opacity=".25" fill="none"/></g></g>';
o+='<g class="B"><path d="'+shp(RA,RB,14)+'" fill="url(#gr)"/><g clip-path="url(#c4)">'+dl(RA,RB,.12,"#f2b84b",1.2,"1 4")+dl(RA,RB,.88,"#f2b84b",1.2,"1 4")+sw(RA,RB,.38,4,.2,.8)+flr(RA,RB,.62,4,4.5,.15,.85)+'</g>'+
'<path d="'+shp(TR,BR)+'" fill="url(#gc)"/><g clip-path="url(#c2)">'+dl(TR,BR,.08,"#c9824a",1.5,"1 5")+dl(TR,BR,.93,"#c9824a",1.5,"1 5")+dt(TR,BR,[.28,.5,.72],.05,.97,10,"#e08a3a")+'<path d="'+line(TR,BR,.3)+'" stroke="#fff" stroke-width="9" opacity=".4" fill="none"/></g></g>';
o+='<g class="K"><ellipse cx="366" cy="192" rx="40" ry="34" fill="url(#gk)"/><path d="M340 172C352 184 354 202 344 216M356 162C370 176 372 206 360 224M376 160C390 172 392 196 384 218" stroke="#ffd98a" stroke-width="2.2" fill="none" opacity=".85"/><path d="M345 168C360 160 380 160 392 170" stroke="#fff" stroke-width="3" opacity=".35" fill="none"/>'+fl(372,196,4,"#f5a623")+'</g>';
return'<svg class="gt" viewBox="0 0 735 390" xmlns="http://www.w3.org/2000/svg">'+o+'</svg>'}
c1.insertAdjacentHTML("beforeend",gat());
