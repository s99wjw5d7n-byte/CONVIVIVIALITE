import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="mb-8">
            <span className="text-9xl font-bold text-[#264653]">404</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-[#264653]">Page non trouvée</h1>
          
          <p className="text-lg mb-8 text-[#495057]">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2A9D8F] text-white rounded-md hover:bg-[#2A9D8F]/80 transition-colors text-lg font-medium"
            >
              <Home size={18} className="mr-2" /> Accueil
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#264653] text-[#264653] rounded-md hover:bg-[#264653]/10 transition-colors text-lg font-medium"
            >
              <ArrowLeft size={18} className="mr-2" /> Retour
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

