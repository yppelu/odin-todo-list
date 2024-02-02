export const root = document.documentElement;

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function setColorScheme(scheme) {
  switch (scheme) {
    case 'dark':
      root.classList.add('dark');
      break;
    case 'light':
      root.classList.add('light');
      break;
  }
}

export default function updateColorScheme() {
  setColorScheme(getPreferredColorScheme());
}