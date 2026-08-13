import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Layouts
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Definition from './pages/Definition';
import WhyPolicy from './pages/WhyPolicy';
import Measures from './pages/Measures';
import Implementation from './pages/Implementation';
import Examples from './pages/Examples';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-content">
              <h1>La convivialité urbaine</h1>
              <div className="loader-bar"></div>
            </div>
          </motion.div>
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/definition" element={<Definition />} />
              <Route path="/pourquoi-politique-publique" element={<WhyPolicy />} />
              <Route path="/mesures-concretes" element={<Measures />} />
              <Route path="/mise-en-oeuvre" element={<Implementation />} />
              <Route path="/exemples" element={<Examples />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;

