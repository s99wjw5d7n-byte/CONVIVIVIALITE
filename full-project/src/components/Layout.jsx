import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/definition', label: 'Définition et concept' },
    { path: '/pourquoi-politique-publique', label: 'Pourquoi une politique publique ?' },
    { path: '/mesures-concretes', label: 'Mesures concrètes' },
    { path: '/mise-en-oeuvre', label: 'Mise en œuvre' },
    { path: '/exemples', label: 'Exemples' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#264653] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Convivialité Urbaine
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-[#E9C46A] transition-colors ${
                  location.pathname === item.path ? 'text-[#E9C46A] font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#264653] border-t border-[#2A9D8F]/20"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 hover:text-[#E9C46A] transition-colors ${
                    location.pathname === item.path ? 'text-[#E9C46A] font-medium' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">À propos</h3>
              <p className="text-sm text-gray-300">
                Ce site présente une analyse de la convivialité comme politique publique en milieu urbain,
                proposant des mesures concrètes pour sa mise en œuvre.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-[#E9C46A] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">
                Pour toute question ou suggestion concernant ce projet, n'hésitez pas à nous contacter.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-3 px-4 py-2 bg-[#2A9D8F] text-white rounded hover:bg-[#2A9D8F]/80 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Convivialité Urbaine. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 p-3 bg-[#2A9D8F] text-white rounded-full shadow-lg hover:bg-[#2A9D8F]/80 transition-colors z-50"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Layout;

