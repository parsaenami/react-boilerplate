import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { responsiveFontSizes } from "@material-ui/core/styles";

/**
 * A global theme for the app
 * @type {Theme}
 */
let Theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {},
    secondary: {},
    info: {},
    error: {},
    text: {},
    background: {},
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;