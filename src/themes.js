const accentColors = {
  lime: '#a4c400',
  green: '#60a917',
  emerald: '#008a00',
  teal: '#00aba9',
  cyan: '#1ba1e2',
  cobalt: '#0050ef',
  indigo: '#6a00ff',
  violet: '#aa00ff',
  pink: '#f472d0',
  magenta: '#d80073',
  crimson: '#a20025',
  red: '#e51400',
  orange: '#fa6800',
  amber: '#f0a30a',
  yellow: '#e3c800',
  brown: '#825a2c',
  olive: '#6d8764',
  steel: '#647687',
  mauve: '#76608a',
  taupe: '#87794e',
};

const palettes = {
  light: {
    backgroundColor: '#f0f0f0',
    watermarkColor: '#ebebeb',
    formTextColor: '#000000',
    linkButtonTextColor: '#828282',
    linkButtonTextHoverColor: '#242424',
    linkButtonTextPressedColor: '#727272',
    linkButtonTextDisabledColor: '#727272',
    linkListItemActiveTextColor: '#ffffff',
    separatorColor: '#cfcfcf',
    itemHoverColor: '#cfcfcf',
    inputBackgroundColor: '#ffffff',
    inputBorderColor: '#bdbdbd',
    buttonBackgroundColor: '#dfdfdf',
    buttonBackgroundHoverColor: '#cecece',
    buttonBorderColor: '#acacac',
    buttonBorderHoverColor: '#bdbdbd',
    buttonTextColor: '#242424',
    buttonTextHoverColor: '#242424',
    buttonTextPressedColor: '#f0f0f0',
  },
  dark: {
    backgroundColor: '#202020',
    watermarkColor: '#242424',
    formTextColor: '#c1c1c1',
    linkButtonTextColor: '#919191',
    linkButtonTextHoverColor: '#d1d1d1',
    linkButtonTextPressedColor: '#515151',
    linkButtonTextDisabledColor: '#515151',
    linkListItemActiveTextColor: '#ffffff',
    separatorColor: '#3e3e42',
    itemHoverColor: '#3e3e42',
    inputBackgroundColor: '#202020',
    inputBorderColor: '#c0c0c0',
    buttonBackgroundColor: '#333333',
    buttonBackgroundHoverColor: '#3e3e42',
    buttonBorderColor: '#444444',
    buttonBorderHoverColor: '#3e3e42',
    buttonTextColor: '#d1d1d1',
    buttonTextHoverColor: '#d1d1d1',
    buttonTextPressedColor: '#d1d1d1',
  },
};

const themeSizes = {
  xs: { name: 'xs', hrName: 'extra small', sizeFactor: 0.8 },
  s: { name: 's', hrName: 'small', sizeFactor: 0.9 },
  m: { name: 'm', hrName: 'medium', sizeFactor: 1 },
  l: { name: 'l', hrName: 'large', sizeFactor: 1.1 },
  xl: { name: 'xl', hrName: 'extra large', sizeFactor: 1.2 },
};

const sizes = {
  xxs: 8,
  xs: 10,
  s: 12,
  m: 15,
  l: 18,
  xl: 22,
  xxl: 30,
};

const defaultThemeSize = () => ({
  name: themeSizes.m.name,
  sizeFactor: themeSizes.m.sizeFactor,
});

const themes = {
  light: {
    name: 'light',
    hrName: 'light',
    accentColor: accentColors.cyan,
    showBackgroundGradient: true,
    showBorder: true,
    palette: palettes.light,
    themeSize: defaultThemeSize(),
  },
  dark: {
    name: 'dark',
    hrName: 'dark',
    accentColor: accentColors.cyan,
    showBackgroundGradient: false,
    showBorder: true,
    palette: palettes.dark,
    themeSize: defaultThemeSize(),
  },
};

const calculateSize = (size, sizeFactor) => Math.floor(size * sizeFactor);

const margin = 2;
const calculateMargin = sizeFactor => calculateSize(margin, sizeFactor);

export {
  accentColors, palettes, themes, themeSizes, sizes, calculateSize, calculateMargin,
};
