import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#264653] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
            <p className="text-xl max-w-3xl">
              Vous avez des questions ou des suggestions concernant la convivialité urbaine ? Contactez-nous !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8F9FA] border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-[#495057]">
            <Link to="/" className="hover:text-[#2A9D8F]">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#264653]">À propos du projet</h2>
            <p className="text-lg mb-8 text-[#495057]">
              Ce site présente une analyse de la convivialité comme politique publique en milieu urbain, 
              proposant des mesures concrètes pour sa mise en œuvre. Il s'agit d'une réflexion sur la manière 
              dont nos villes peuvent devenir des lieux de rencontre, d'échange et de création collective.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-[#264653]">Nous contacter</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} className="text-[#2A9D8F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#264653]">Email</h4>
                  <p className="text-[#495057]">contact@convivialite-urbaine.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} className="text-[#2A9D8F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#264653]">Téléphone</h4>
                  <p className="text-[#495057]">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-[#2A9D8F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#264653]">Adresse</h4>
                  <p className="text-[#495057]">
                    123 Avenue de la Convivialité<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#264653]">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#264653] rounded-full flex items-center justify-center text-white hover:bg-[#264653]/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#264653] rounded-full flex items-center justify-center text-white hover:bg-[#264653]/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#264653] rounded-full flex items-center justify-center text-white hover:bg-[#264653]/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#264653] rounded-full flex items-center justify-center text-white hover:bg-[#264653]/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#264653]">Formulaire de contact</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#2A9D8F]/20 border border-[#2A9D8F] text-[#264653] rounded-lg p-6 mb-6"
              >
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#264653] font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#264653] font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#264653] font-medium mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#264653] font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-[#2A9D8F] text-white rounded-md hover:bg-[#2A9D8F]/80 transition-colors text-lg font-medium"
                  >
                    Envoyer <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
          >
            <ArrowRight size={16} className="mr-2 rotate-180" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

