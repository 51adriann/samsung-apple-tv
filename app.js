(function(){'use strict';
// Works in browser preview and Tizen TV. No privileged APIs or package disabling.
var apps=[{label:'Disney+',cls:'disney'},{label:'NETFLIX',cls:'netflix'},{label:'YouTube',cls:'youtube'},{label:'prime video',cls:'prime'},{label:'Spotify',cls:'spotify'}];
var nav=document.getElementById('apps'),selected=0,inGallery=false,idleTimer=null,artTimer=null,artIndex=0,hintTimer=null;
var art=['art/art-01.svg','art/art-02.svg','art/art-03.svg','art/art-04.svg','art/art-05.svg','art/art-06.svg'];
apps.forEach(function(a,i){var el=document.createElement('div');el.className='app '+a.cls;el.textContent=a.label;el.setAttribute('role','button');el.addEventListener('click',function(){selected=i;renderSelection();activate();});nav.appendChild(el);});
function renderSelection(){Array.prototype.forEach.call(nav.children,function(el,i){el.classList.toggle('selected',i===selected);});}
function clock(){var d=new Date();document.getElementById('clock').textContent=d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});}clock();setInterval(clock,30000);renderSelection();
function resetIdle(){if(inGallery)return;clearTimeout(idleTimer);idleTimer=setTimeout(openGallery,10*60*1000);}
function nextArt(){document.getElementById('painting').style.backgroundImage='url("'+art[artIndex%art.length]+'")';artIndex++;}
function openGallery(){if(inGallery)return;inGallery=true;clearTimeout(idleTimer);document.getElementById('home').classList.add('hidden');document.getElementById('gallery').classList.remove('hidden');nextArt();artTimer=setInterval(nextArt,60000);document.getElementById('gallery').classList.add('showhint');hintTimer=setTimeout(function(){document.getElementById('gallery').classList.remove('showhint');},4000);}
function closeGallery(){inGallery=false;clearInterval(artTimer);clearTimeout(hintTimer);document.getElementById('gallery').classList.add('hidden');document.getElementById('home').classList.remove('hidden');resetIdle();}
function activate(){// Samsung Tizen blocks arbitrary launching of many third-party TV apps.
// Do not invent application IDs or claim these buttons launch streaming services.
alert('Vorschau: '+apps[selected].label+'\n\nDas direkte Starten installierter Streamingapps ist auf Samsung Tizen eingeschränkt und muss gerätespezifisch geprüft werden.\n\nMit der Home-Taste gelangst du zu deinen echten TV-Apps.');}
function handle(e){var k=e.key||'',code=e.keyCode;if(inGallery){if(k==='Escape'||k==='Backspace'||k==='Enter'||k.indexOf('Arrow')===0||code===10009||code===13||code>=37&&code<=40){closeGallery();e.preventDefault();}return;}resetIdle();if(k==='ArrowRight'||code===39){selected=(selected+1)%apps.length;renderSelection();e.preventDefault();}else if(k==='ArrowLeft'||code===37){selected=(selected+apps.length-1)%apps.length;renderSelection();e.preventDefault();}else if(k==='Enter'||code===13){activate();e.preventDefault();}else if(k==='ArrowDown'||code===40){openGallery();e.preventDefault();}else if(k==='Escape'||k==='Backspace'||code===10009){try{if(window.tizen&&tizen.application)tizen.application.getCurrentApplication().exit();}catch(err){}e.preventDefault();}}
document.addEventListener('keydown',handle);document.addEventListener('pointermove',resetIdle);document.addEventListener('touchstart',resetIdle);document.querySelector('.info-tile').addEventListener('click',openGallery);resetIdle();
})();
