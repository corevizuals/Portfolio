// small reveal on scroll + simple nav active highlight
function handleReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;

  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, {rootMargin:'0px 0px -60px 0px'});
    els.forEach(el=>io.observe(el));
    return;
  }

  // fallback for browsers without IntersectionObserver: one check per frame
  let ticking = false;
  const check = ()=>{
    document.querySelectorAll('.reveal:not(.show)').forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('show');
    });
    ticking = false;
  };
  check();
  window.addEventListener('scroll', ()=>{
    if(!ticking){ ticking = true; requestAnimationFrame(check); }
  }, {passive:true});
}

function setActiveNav(){
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{
    if(a.getAttribute('href') === window.location.pathname.split('/').pop() || 
       (a.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))){
      a.classList.add('active');
    } else a.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  handleReveal();
  setActiveNav();

  // -----------------------------
  // Load More Projects
  // -----------------------------
  const portfolio = document.getElementById('portfolio');
  if(portfolio){
    const allProjects = Array.from(portfolio.children);
    let visibleCount = 6; // number of projects to show initially

    function showProjects(){
      allProjects.forEach((p, i)=>{
        p.style.display = i < visibleCount ? 'block' : 'none';
      });
      const btn = document.getElementById('loadMore');
      if(btn) btn.style.display = visibleCount >= allProjects.length ? 'none' : 'inline-block';
    }

    const loadBtn = document.getElementById('loadMore');
    if(loadBtn){
      loadBtn.addEventListener('click', ()=>{
        visibleCount += 4; // show 4 more each click
        showProjects();
      });
    }

    showProjects(); // initial display
  }

  // -----------------------------
  // Mobile Menu Toggle
  // -----------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // optional: close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', ()=>{
        nav.classList.remove('show');
      });
    });
  }
});



document.querySelectorAll('.skills .pill').forEach(pill => {
  pill.addEventListener('click', () => {
    pill.classList.toggle('active');
  });
});



const titles = [
  "UI/UX Designer & Founder Core Vizuals",
  "Product Designer",
  "Product Data Scientist",
  "Product Engineer",
  "Front-End Developer",
  "Data Analytics",
  "Data & Experimentation",
  "User Researcher",
  "Web Developer",
  "Creative Technologist",
  "Digital Experience Designer",
  "Visual Storyteller"
];

const typingEl = document.querySelector(".hero-left .typing");
let titleIndex = 0;
let charIndex = 0;
let typingDelay = 50;
let erasingDelay = 10;
let newTitleDelay = 1000;

function typeTitle() {
  if (charIndex < titles[titleIndex].length) {
    typingEl.textContent = titles[titleIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeTitle, typingDelay);
  } else {
    setTimeout(eraseTitle, newTitleDelay);
  }
}

function eraseTitle() {
  if (charIndex > 0) {
    typingEl.textContent = titles[titleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseTitle, erasingDelay);
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeTitle, typingDelay);
  }
}

// Start typing on page load
document.addEventListener("DOMContentLoaded", () => {
  typeTitle();
});


const cursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});


document.getElementById('caseTech').innerHTML = info.tech || '';

const toolsContainer = document.getElementById('caseTools');
toolsContainer.innerHTML = '';

if (info.tools) {

  const sections = [
  { key: 'dev', label: 'Development' },
  { key: 'experimentation', label: 'Experimentation & Analytics' },
  { key: 'design', label: 'Design' },
  { key: 'data', label: 'Data' },
  { key: 'collab', label: 'Collaboration' },
  { key: 'cms', label: 'CMS & Content' },
  { key: 'analytics', label: 'Analytics & BI' },
  { key: 'projectManagement', label: 'Project Management' },
  { key: 'onSiteTools', label: 'On-Site Tools' },
  { key: 'ideation', label: 'Ideation & Brainstorming' }
  ];

  sections.forEach(section => {
    const tools = info.tools[section.key];
    if (!tools || tools.length === 0) return;

    const block = document.createElement('div');
    block.className = 'tools-section';

    const title = document.createElement('p');
    title.className = 'tools-title';
    title.textContent = section.label;

    const grid = document.createElement('div');
    grid.className = 'tools-grid';

    tools.forEach(tool => {
      const item = document.createElement('div');
      item.className = 'tool-item';

      const img = document.createElement('img');
      img.src = tool.icon;
      img.alt = tool.name;

      const span = document.createElement('span');
      span.textContent = tool.name;

      item.appendChild(img);
      item.appendChild(span);
      grid.appendChild(item);
    });

    block.appendChild(title);
    block.appendChild(grid);
    toolsContainer.appendChild(block);
  });
}