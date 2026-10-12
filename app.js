const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
menuToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.textContent=open?'✕':'☰';
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
  if(menuToggle)menuToggle.textContent='☰';
}));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href');
  if(id==='#')return;
  const target=document.querySelector(id);
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
    history.replaceState(null,'',id);
  }
}));
