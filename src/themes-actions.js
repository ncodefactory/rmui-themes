import { themeActionTypes } from './themes-reducer';

const changeAccentColor = color => ({
  type: themeActionTypes.changeAccentColor,
  payload: { color },
});

const changeTheme = themeName => ({
  type: themeActionTypes.changeTheme,
  payload: { themeName },
});

const changeThemeSize = themeSizeName => ({
  type: themeActionTypes.changeThemeSize,
  payload: { themeSizeName },
});

export { changeThemeSize, changeTheme, changeAccentColor };
