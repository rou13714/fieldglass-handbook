// Accordion
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const acc = btn.closest('.accordion');
    const body = acc.querySelector('.accordion-body');
    const isOpen = acc.classList.contains('open');
    acc.classList.toggle('open', !isOpen);
    body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px';
  });
});

// Scroll-linked flow progress
const flowBubbles = document.querySelectorAll('a.flow-bubble-h[href^="#"]');
if (flowBubbles.length > 0) {
  const sections = Array.from(flowBubbles).map(b => {
    const id = b.getAttribute('href').replace('#','');
    return { bubble: b, section: document.getElementById(id) };
  }).filter(x => x.section);

  function updateFlow() {
    const scrollY = window.scrollY + window.innerHeight * 0.4;
    let active = null;
    sections.forEach(({ section }) => {
      if (section.offsetTop <= scrollY) active = section.id;
    });
    sections.forEach(({ bubble, section }) => {
      const isActive = section.id === active;
      bubble.classList.toggle('scrolled', isActive);
    });
  }

  window.addEventListener('scroll', updateFlow, { passive: true });
  updateFlow();
}

// Iframe auto-height
const iframe = document.querySelector('.simulator-wrap iframe');
if (iframe) {
  window.addEventListener('message', e => {
    if (e.data && e.data.type === 'resize') {
      iframe.style.minHeight = e.data.height + 'px';
    }
  });
}
