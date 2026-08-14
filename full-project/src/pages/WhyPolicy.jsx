import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Leaf } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const WhyPolicy = () => {
  const { content } = useContent('whyPolicy');
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2A9D8F] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl max-w-3xl">
              {content.hero.subtitle}
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
            <span className="font-medium">Pourquoi une politique publique ?</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-[#264653]">Dans cette section</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#enjeux" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Les enjeux contemporains des villes
                  </a>
                </li>
                <li>
                  <a href="#benefices" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Les bénéfices d'une politique de convivialité urbaine
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/definition" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Définition et concept <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/mesures-concretes" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Mesures concrètes <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="enjeux" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">2.1 Les enjeux contemporains des villes</h2>
                
                <p className="mb-6">
                  Les villes contemporaines font face à de nombreux défis qui justifient l'adoption de politiques publiques axées sur la convivialité :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-[#E76F51]/20 rounded-full flex items-center justify-center">
                        <Users size={24} className="text-[#E76F51]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#264653]">Crise du lien social</h3>
                      <p className="text-[#495057]">
                        Individualisme, isolement, perte des solidarités traditionnelles et fragmentation sociale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center">
                        <Leaf size={24} className="text-[#2A9D8F]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#264653]">Défis environnementaux</h3>
                      <p className="text-[#495057]">
                        Nécessité de repenser la mobilité et l'utilisation de l'espace pour réduire l'empreinte écologique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-[#E9C46A]/20 rounded-full flex items-center justify-center">
                        <Shield size={24} className="text-[#E9C46A]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#264653]">Inégalités territoriales</h3>
                      <p className="text-[#495057]">
                        Fractures socio-spatiales et ségrégation urbaine qui divisent les populations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-[#F4A261]/20 rounded-full flex items-center justify-center">
                        <TrendingUp size={24} className="text-[#F4A261]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#264653]">Évolution des modes de vie</h3>
                      <p className="text-[#495057]">
                        Télétravail, nouveaux usages de l'espace public et transformation des besoins urbains.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Ces enjeux appellent à repenser fondamentalement la manière dont nous concevons et gérons nos villes. 
                  La convivialité urbaine offre un cadre conceptuel et pratique pour répondre à ces défis de manière intégrée.
                </p>
              </section>

              <section id="benefices">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">2.2 Les bénéfices d'une politique de convivialité urbaine</h2>
                
                <p className="mb-6">
                  Une politique publique centrée sur la convivialité peut générer de nombreux bénéfices pour les villes et leurs habitants :
                </p>

                <div className="overflow-hidden rounded-lg shadow-md mb-8">
                  <table className="min-w-full bg-white">
                    <thead className="bg-[#264653] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Bénéfice</th>
                        <th className="py-3 px-4 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-medium">Cohésion sociale</td>
                        <td className="py-3 px-4">Renforcement du lien social et du sentiment d'appartenance</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Bien-être collectif</td>
                        <td className="py-3 px-4">Amélioration de la qualité de vie et réduction du stress urbain</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Dynamisme économique</td>
                        <td className="py-3 px-4">Revitalisation des commerces de proximité et de l'économie locale</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Résilience territoriale</td>
                        <td className="py-3 px-4">Capacité accrue à faire face aux crises (sanitaires, climatiques, etc.)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Innovation sociale</td>
                        <td className="py-3 px-4">Émergence de solutions collectives aux problèmes urbains</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Attractivité territoriale</td>
                        <td className="py-3 px-4">Renforcement de l'identité et de l'image positive du territoire</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Ces bénéfices ne sont pas seulement théoriques : de nombreuses villes à travers le monde ont déjà commencé 
                  à mettre en œuvre des politiques de convivialité urbaine et à en récolter les fruits. La section suivante 
                  présente des mesures concrètes qui peuvent être adoptées pour favoriser la convivialité en milieu urbain.
                </p>
              </section>
            </article>

            {/* Next/Prev Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link 
                to="/definition" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" /> Définition et concept
              </Link>
              <Link 
                to="/mesures-concretes" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                Mesures concrètes <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPolicy;

