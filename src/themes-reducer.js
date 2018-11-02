import themes, { themeSizes } from './themes';

const defaultThemeState = themes.light;

const themeActionTypes = {
  changeAccentColor: 'CHANGE_ACCENT_COLOR',
  changeTheme: 'CHANGE_THEME',
  changeThemeSize: 'CHANGE_THEME_SIZE',
};

const themeReducer = (state = defaultThemeState, action) => {
  switch (action.type) {
    case themeActionTypes.changeAccentColor: {
      return { ...state, accentColor: action.payload.color };
    }
    case themeActionTypes.changeTheme: {
      return {
        ...themes[action.payload.themeName],
        accentColor: state.accentColor,
        themeSize: state.themeSize,
      };
    }
    case themeActionTypes.changeThemeSize: {
      const newThemeSize = themeSizes[action.payload.themeSizeName];
      return {
        ...state,
        themeSize: {
          name: newThemeSize.name,
          sizeFactor: newThemeSize.sizeFactor,
        },
      };
    }
    default:
      return state;
  }
};

export { themeActionTypes, themeReducer };
