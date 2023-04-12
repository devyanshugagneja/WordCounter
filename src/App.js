import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        aboutText="About"
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Router>
          <Switch>
            //? old way to use Switch, but in updated version, Switch has been
            //? replaced with Routes,  thats why Routes as Switch was imported.
            //? In the updated method, we use element.
            {/* <Route path="/about">
                <About/>
              </Route> */}
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Switch>
        </Router>
        <Alert alert={alert} />
      </div>
    </>
  );
}

export default App;
