import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PagesContainers from "./containers/PagesContainers";
function App() {
  return (
    <div>
      <PagesContainers>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PagesContainers>
    </div>
  );
}

export default App;
