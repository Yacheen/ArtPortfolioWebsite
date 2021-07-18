import './css/App.css';
import NavBar from './components/NavBar';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createTheme({
  
  palette: {
    primary: {
      main: "#004d40",
      light: "#39796b",
      dark: "#00251a"
    },
    secondary: {
      main: "#1b5e20",
      light: "#4c8c4a",
      dark: "#003300"
    },
    tonalOffset: 0.2,
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 20
  },
  

});


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
