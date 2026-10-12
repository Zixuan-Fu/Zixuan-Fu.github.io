const publicationLayout = document.querySelector('.publications-layout');
const categoryTabs = Array.from(document.querySelectorAll('.pub-category'));
const publicationPanels = Array.from(document.querySelectorAll('.pub-panel'));

function showCategory(tab) {
  categoryTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-selected', String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });

  publicationPanels.forEach((panel) => {
    panel.classList.toggle('is-active', panel.id === tab.getAttribute('aria-controls'));
  });
}

if (publicationLayout && categoryTabs.length > 1) {
  publicationLayout.classList.add('is-filtered');

  categoryTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showCategory(tab));
    tab.addEventListener('keydown', (event) => {
      const step = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
      if (!step) return;

      event.preventDefault();
      const next = categoryTabs[(index + step + categoryTabs.length) % categoryTabs.length];
      showCategory(next);
      next.focus();
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
