var g=document.getElementById("md"),s="";for(var i=0;i<24;i++){s+='<ellipse cx="0" cy="-70" rx="'+(i%2?5:8)+'" ry="'+(i%2?10:17)+'" transform="rotate('+i*15+')"/>'}
g.innerHTML='<g fill="none" stroke="currentColor" stroke-width="2"><circle r="96"/><circle r="52"/><circle r="30"/>'+s+'</g>';
