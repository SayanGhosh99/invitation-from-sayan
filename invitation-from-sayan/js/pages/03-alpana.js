var h3=document.querySelector("#s3 .col");h3.insertAdjacentHTML("afterbegin",alp());
[0,1,2,3,4,5,6].map(function(k){return[k%2?51:38,87-k*10.2,k%2,k%2?7:-7]}).forEach(function(p,i){var d=document.createElement("div");d.className="ft"+(p[2]?" m":"");d.style.cssText="left:calc("+p[0]+"*var(--c));top:"+p[1]+"%;--rt:"+p[3]+"deg;--d:"+(3.3+i*.75)+"s";h3.appendChild(d)});
