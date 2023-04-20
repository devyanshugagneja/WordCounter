import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes , Route,  } from "react-router-dom";
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
      
      
      <Router>
        <Navbar title="Text Edits" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes >
            <Route path="/about" element={<About mode={mode}/>}>
              
            </Route>

            <Route path="/" element={  <TextForm 
                showAlert={showAlert}
                heading="Enter the Text below to Analyze"
                mode={mode}
              />}>
            
            </Route>
          </Routes>
          
        </div>
      </Router>
    </>
  );
}
        
      
 

export default App;
