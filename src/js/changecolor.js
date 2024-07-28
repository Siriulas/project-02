import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';
import { refs } from './refs.js';
import { heroBackground } from './hero_background.js';
import { setLocalData } from './localdata.js';

const changecolor = document.querySelector('.open_theme');
const openmenu = document.querySelector('.js_menu_changecolor');
const rootColor = document.documentElement;
const roote = window.getComputedStyle(rootColor);

changecolor.addEventListener('click', e => {
  openmenu.classList.toggle('isopen');
});
const li_item = document.querySelectorAll('.theme_button');
li_item.forEach((e, key) => {
  const theme = colorTheme.find(theme => theme.id === key + 1);
  e.style.background = theme.accent_color;
  e.dataset.id = key + 1;
});

openmenu.addEventListener('click', e => {
  const id = parseInt(e.target.dataset.id);
  const theme = colorTheme.find(theme => theme.id === id);
  refs.heroBackground.innerHTML = generatePictureTag(
    heroBackground,
    theme.path,
    theme.path_retina,
    'background_image'
  );
  console.log(roote.getPropertyValue('--akcent-collor'));
  rootColor.style.setProperty('--akcent-collor', `${theme.accent_color}`);
  console.log(roote.getPropertyValue('--akcent-collor'));
  setLocalData(id);
});