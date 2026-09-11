(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const labels = root.lang === 'ko' ? {dark:'라이트 테마로 전환',light:'다크 테마로 전환'} : {dark:'Switch to light theme',light:'Switch to dark theme'};
  const update = () => {
    const theme = root.dataset.theme;
    button.setAttribute('aria-label', labels[theme]);
    button.title = labels[theme];
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#181818' : '#ffffff';
  };
  if (!button) return;
  update();
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('sangmin-theme', root.dataset.theme); } catch {}
    update();
  });
  window.addEventListener('storage', event => {
    if (event.key === 'sangmin-theme' && ['dark','light'].includes(event.newValue)) {
      root.dataset.theme = event.newValue;
      update();
    }
  });
})();
