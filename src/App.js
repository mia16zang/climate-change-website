import Penguins from "./components/penguins";
import Content from "./components/content";
import Quiz from "./components/quiz";
import Result from "./components/results";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Citations from "./components/citations";

function App() {
  return (
    <div className="bg-blue-100">
      <Router>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="/penguins" element={<Penguins />} />
          <Route path="/content" element={<Content />} />
          <Route path="/home" element={<Home />} />
          <Route path="/citations" element={<Citations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
