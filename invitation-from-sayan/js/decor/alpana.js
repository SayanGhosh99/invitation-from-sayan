function alp(){var o="",i,d;
[[96,0],[90,.3],[64,.7],[50,1],[32,1.3],[14,1.6]].forEach(function(r){o+='<circle class="dr" pathLength="1" r="'+r[0]+'" stroke="#e8a91c" stroke-width="1.8" style="--d:'+r[1]+'s"/>'});
for(i=0;i<24;i++){d=(1.2+i*.05).toFixed(2);o+='<g transform="rotate('+i*15+')"><ellipse class="pe" cx="0" cy="-77" rx="'+(i%2?5:8)+'" ry="'+(i%2?9:15)+'" fill="rgba(255,206,80,.32)" stroke="#e8a91c" stroke-width="1.4" style="--d:'+d+'s"/></g>'}
for(i=0;i<12;i++){o+='<g transform="rotate('+i*30+')"><ellipse class="pe" cx="0" cy="-40" rx="6" ry="11" fill="rgba(255,255,255,.6)" stroke="#e8a91c" stroke-width="1.4" style="--d:'+(2.4+i*.06)+'s"/></g>'}
for(i=0;i<36;i++){o+='<g transform="rotate('+i*10+')"><circle class="pe" cx="0" cy="-57" r="1.8" fill="#e8a91c" style="--d:'+(2.8+i*.03)+'s"/></g>'}
return'<svg class="mdbig" viewBox="-100 -100 200 200">'+o+'</svg>'}
