import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
