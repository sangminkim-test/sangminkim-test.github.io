(() => {
  let theme = 'dark';
  try { const saved = localStorage.getItem('sangmin-theme'); if (saved === 'light' || saved === 'dark') theme = saved; } catch {}
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'dark' ? '#181818' : '#ffffff';
})();
