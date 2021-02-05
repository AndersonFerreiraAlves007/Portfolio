import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#512da8',
      light: '#8559da',
      dark: '#140078',
      contrastText: '#ffffff',
    },
    info: {
      main: '#7cb342',
      light: '#aee571',
      dark: '#4b830d',
      contrastText: '#000000',
    },
    success: {
      main: '#afd1bd',
      light: '#afd1bd',
      dark: '#afd1bd',
      contrastText: '#000000',
    },
  },
})

theme.typography.h3 = {
  fontSize: '1.1rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
}

theme.typography.h1 = {
  fontSize: '1.3rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.0rem',
  },
}

theme.typography.h2 = {
  fontSize: '1.0rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem',
  },
}

theme.typography.h4 = {
  fontSize: '0.8rem',
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem',
  },
}

export default theme
