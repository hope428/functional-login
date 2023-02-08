import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import CustomCard from "./components/Card";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CustomCard>
        <Form />
      </CustomCard>
    </ThemeProvider>
  );
}

export default App;
