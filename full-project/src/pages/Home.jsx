import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building, Leaf, PanelTop } from 'lucide-react';
import { useContent } from '../hooks/useContent';

// Import dynamique de toutes les images du dossier assets/images
const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });
const img = (name) => {
  if (!name) return undefined;
  const filename = name.split('/').pop();
  return images[`../assets/images/${filename}`];
};

// Mapping des icônes pour les utiliser dynamiquement
const iconComponents = {
  PanelTop: PanelTop,
  Building: Building,
  Leaf: Leaf,
  Users: Users
};

const Home = () => {
  // Utilisation du hook pour récupérer le contenu de la page d'accueil
  const { content } = useContent('home');
  
  // Destructuration du contenu pour plus de lisibilité
  const { hero, introduction, sections, testimonials, callToAction } = content;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.7), rgba(38, 70, 83, 0.7)), url(${img(hero.backgroundImage)})` 
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/definition" 
              className="inline-block px-6 py-3 bg-[#2A9D8F] text-white rounded-md hover:bg-[#2A9D8F]/80 transition-colors text-lg font-medium"
            >
              {hero.buttonText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#264653]">{introduction.title}</h2>
            <p className="text-lg mb-8 text-[#495057]">
              {introduction.content}
            </p>
            <blockquote className="italic text-xl mb-8 text-[#264653] font-serif">
              "{introduction.quote}"
              <footer className="text-base mt-2 text-[#495057]">— {introduction.quoteAuthor}</footer>
            </blockquote>
            <Link 
              to="/definition" 
              className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors font-medium"
            >
              {introduction.linkText} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sections Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#264653]">{sections.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.cards.map((card, index) => {
              const IconComponent = iconComponents[card.icon];
              
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-[${card.iconColor}]/20 rounded-full flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent size={24} className={`text-[${card.iconColor}]`} />}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#264653]">{card.title}</h3>
                    <p className="text-[#495057] mb-4">
                      {card.content}
                    </p>
                    <Link 
                      to={card.linkUrl} 
                      className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors font-medium"
                    >
                      {card.linkText} <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#264653] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-[#264653] border border-white/20 rounded-lg p-6">
                <blockquote className="italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#E9C46A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#264653]">{callToAction.title}</h2>
          <p className="text-lg mb-8 text-[#264653] max-w-2xl mx-auto">
            {callToAction.content}
          </p>
          <Link 
            to={callToAction.buttonUrl} 
            className="inline-block px-6 py-3 bg-[#264653] text-white rounded-md hover:bg-[#264653]/80 transition-colors text-lg font-medium"
          >
            {callToAction.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

