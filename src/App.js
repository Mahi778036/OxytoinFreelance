/** @format */

import "./App.css";
import { Header } from "./components/Header";
import { LinearStepper } from "./Containers/Stepper/LinearStepper";
import { Footer } from "./components/Footer";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <div className='App'>
      <StyledEngineProvider injectFirst>
        <Header />
        <LinearStepper />
        <Footer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
