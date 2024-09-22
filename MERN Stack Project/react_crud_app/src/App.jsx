import Header from "./components/Header";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
