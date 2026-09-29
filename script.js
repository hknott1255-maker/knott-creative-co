const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('lead-form');
form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent(`New Knott Creative Co. inquiry — ${data.get('business')}`);
  const body=encodeURIComponent(`Name: ${data.get('name')}\nBusiness: ${data.get('business')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')||'Not provided'}\n\nWhat they are looking for:\n${data.get('message')||'Not provided'}`);
  // Replace the address below with the final Knott Creative Co. inbox before launch.
  window.location.href=`mailto:hello@knottcreativeco.com?subject=${subject}&body=${body}`;
});
