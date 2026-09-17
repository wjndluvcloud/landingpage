try {
  const savedTheme = localStorage.getItem('landing-theme');
  const theme = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
} catch {
  document.documentElement.dataset.theme = 'dark';
}
