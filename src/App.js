import Header from "./pages/Header";
import HomePages from "./pages/HomePages";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

// main App component that renders the Header, HomePages, Projects, Contact and Footer components
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectpage/*" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
