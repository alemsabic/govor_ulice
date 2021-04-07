import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: '#fffc3e',           // --> CSS color string, background of the page
    text: '#555',            // --> CSS color string, color of text
    primary: '#555',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#fffc3e',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(0,0,0,0.2)',               // --> CSS color string, border colors
    code: '#555',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: '#333',           // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: '#eee',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: '#333',  // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: '#333',
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: '#fffc3e',
      text: '#555',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(255,252,62,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: 'rgba(52,51,51,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
