import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Navbar from './Navbar';

const RouterCompoent = () => {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </Router>
  );
}

export default RouterCompoent
