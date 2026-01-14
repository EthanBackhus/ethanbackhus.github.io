// posts array (keep if needed)
const posts = [
  {title:'Building an escrow program on Solana', date:'Oct 2025', excerpt:'A walkthrough of building an escrow program using Anchor and TypeScript', url:'#'},
  {title:'Why I prefer static sites for portfolios', date:'Sep 2025', excerpt:'Static sites are fast, cheap, and easy to maintain — heres why', url:'#'}
];

function renderPosts(){
  const box = document.getElementById('posts');
  if (!box) return; // Guard if posts element doesn't exist
  box.innerHTML = '';
  posts.forEach(p=>{
    const el = document.createElement('a');
    el.className = 'post card';
    el.href = p.url;
    el.innerHTML = `<div style="flex:1"><strong>${p.title}</strong><br/><small>${p.date}</small><p style='margin:6px 0 0;color:var(--muted)'>${p.excerpt}</p></div>`;
    box.appendChild(el);
  });
}

// navigation smooth scroll + fake loading
document.querySelectorAll('[data-link]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      showLoading();
      const id = href.slice(1);
      setTimeout(()=>{
        document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'});
        hideLoading();
      }, 380);
    }
  });
});

// Add loading animation to navbar links (except hash links)
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    // Only add loading for non-hash links or external pages
    if (href && !href.startsWith('#')) {
      e.preventDefault();
      showLoading();
      setTimeout(() => {
        window.location.href = href;
      }, 380);
    }
  });
});

// Add loading animation to blog card links
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for blog links...');
  const blogLinks = document.querySelectorAll('.blog-link');
  console.log('Found blog links:', blogLinks.length);
  
  blogLinks.forEach(link => {
    console.log('Adding listener to:', link);
    link.addEventListener('click', e => {
      console.log('Blog link clicked!');
      e.preventDefault();
      showLoading();
      const href = link.getAttribute('href');
      console.log('Navigating to:', href);
      setTimeout(() => {
        window.location.href = href;
      }, 380);
    });
  });
});

function showLoading(){
  const loader = document.getElementById('loading');
  if (loader) loader.classList.add('show');
}

function hideLoading(){
  const loader = document.getElementById('loading');
  if (loader) loader.classList.remove('show');
}

window.addEventListener('DOMContentLoaded', ()=>{
  renderPosts();
  document.querySelectorAll('.fade-in').forEach((el,i)=>{el.style.animationDelay = (i*70)+'ms'})
});