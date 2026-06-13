document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const accordion = btn.closest('.accordion');
    const body = accordion.querySelector('.accordion-body');
    const isOpen = accordion.classList.contains('open');

    accordion.classList.toggle('open', !isOpen);
    body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px';
  });
});
