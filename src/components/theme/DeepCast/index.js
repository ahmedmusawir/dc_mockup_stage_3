// Color package for manipulating colors
import color from 'color';

// Theme low-level styles
import palette from './palette';
import font from './font';
import global from './global';

const theme = {
  colors: {
    // Section colors
    section: {
      neutral: palette.primary.neutral,
      dark: palette.primary.dark,
      light: palette.primary.light,
    },
    // Font colors
    text: {
      neutral: palette.background.light,
      dark: palette.primary.dark,
      light: palette.primary.light,
    },
  },
  // Include low-level styles in the theme
  palette,
  font,
  global,
};
export default theme;
