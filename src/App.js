import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from './pages/HomePage';
import ProjectPage from "./pages/ProjectPage";
import AboutPage from './pages/AboutPage';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <main>
      <ScrollToTop>
        <Nav/>
        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/:slug" element={<ProjectPage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </main>
  );
}

export default App;
