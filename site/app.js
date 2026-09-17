const root = document.documentElement;
const themeToggle = document.querySelector('#themeToggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const localTime = document.querySelector('#localTime');
const currentYear = document.querySelector('#currentYear');

function preferredTheme() {
  const saved = localStorage.getItem('landing-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('landing-theme', theme);
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeColor.setAttribute('content', theme === 'dark' ? '#121411' : '#f7f6f1');
}

function updateClock() {
  localTime.textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
}

applyTheme(preferredTheme());
currentYear.textContent = String(new Date().getFullYear());
updateClock();
setInterval(updateClock, 30_000);

themeToggle.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});
