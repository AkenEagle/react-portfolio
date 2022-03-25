import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} />
    </div>
  );
}

export default App;
