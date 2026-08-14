import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import placePublique from '../assets/images/place-publique.jpg';
import { useContent } from '../hooks/useContent';

const Definition = () => {
  const { content } = useContent('definition');
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
            <span className="font-medium">Définition et concept</span>
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
                  <a href="#illich" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    La convivialité selon Ivan Illich
                  </a>
                </li>
                <li>
                  <a href="#urbain" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    La convivialité appliquée au milieu urbain
                  </a>
                </li>
                <li>
                  <a href="#caracteristiques" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Caractéristiques d'une ville conviviale
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/pourquoi-politique-publique" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Pourquoi une politique publique ? <ArrowRight size={16} className="ml-2" />
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
              <section id="illich" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">1.1 La convivialité selon Ivan Illich</h2>
                
                <p className="mb-4">
                  La notion de convivialité, telle que théorisée par Ivan Illich, va bien au-delà de la simple idée de partage de moments agréables. 
                  Illich définit la convivialité comme "l'inverse de la productivité industrielle", caractérisée par "les interrelations continues, 
                  autonomes et créatives entre les personnes, et entre celles-ci et leur environnement". Cette conception s'oppose aux "réponses 
                  conditionnées qui leur sont imposées par d'autres ou par un environnement artificialisé".
                </p>

                <div className="bg-[#E9C46A]/10 border-l-4 border-[#E9C46A] p-4 my-6">
                  <div className="flex">
                    <Quote size={24} className="text-[#E9C46A] mr-3 flex-shrink-0" />
                    <blockquote className="italic">
                      "J'entends par convivialité, le contraire de la productivité industrielle [...] les interrelations continues, 
                      autonomes et créatives entre les personnes, et entre celles-ci et leur environnement."
                      <footer className="text-base mt-2 text-[#495057] not-italic">— Ivan Illich, <cite>La Convivialité</cite></footer>
                    </blockquote>
                  </div>
                </div>

                <p className="mb-4">
                  Dans cette perspective, la convivialité représente :
                </p>

                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Une forme de liberté individuelle réalisée dans une interdépendance mutuelle</li>
                  <li className="mb-2">Une valeur éthique intrinsèque qui donne sens à la vie collective</li>
                  <li className="mb-2">Un rapport où l'humain contrôle l'outil et non l'inverse</li>
                  <li>Un passage "de la répétition du manque à la spontanéité du don"</li>
                </ul>

                <p>
                  Pour Illich, la convivialité est donc un concept profondément politique qui questionne notre rapport aux outils, 
                  aux institutions et aux modes d'organisation sociale. Il s'agit de repenser fondamentalement la manière dont nous 
                  concevons et utilisons les outils (au sens large, incluant les institutions) pour qu'ils soient au service de 
                  l'autonomie et de la créativité humaines, plutôt que l'inverse.
                </p>
              </section>

              <section id="urbain" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">1.2 La convivialité appliquée au milieu urbain</h2>
                
                <div className="mb-6">
                  <img 
                    src={placePublique} 
                    alt="Place publique conviviale" 
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
                  />
                  <p className="text-sm text-gray-500 italic text-center">
                    Une place publique conçue pour favoriser les rencontres et les interactions sociales
                  </p>
                </div>

                <p className="mb-4">
                  Appliquée à l'espace urbain, la convivialité désigne la capacité d'une ville à favoriser les rencontres, 
                  les échanges et les initiatives collectives. Comme l'explique l'anthropologue Lisa Peattie, la convivialité 
                  urbaine met en lumière "l'énergie sociale inhérente à toutes manifestations, de taille réduite ou de nature dissidente", 
                  contrairement à la notion de "communauté" qui suggère permanence et stabilité.
                </p>

                <div className="bg-[#2A9D8F]/10 border-l-4 border-[#2A9D8F] p-4 my-6">
                  <div className="flex">
                    <Quote size={24} className="text-[#2A9D8F] mr-3 flex-shrink-0" />
                    <blockquote className="italic">
                      "Tandis que le terme 'communauté' suggère l'idée de permanence et de stabilité [...], le terme 'convivialité' 
                      met en lumière l'énergie sociale inhérente à toutes manifestations, de taille réduite ou de nature dissidente."
                      <footer className="text-base mt-2 text-[#495057] not-italic">— Lisa Peattie, anthropologue de l'urbain</footer>
                    </blockquote>
                  </div>
                </div>

                <p>
                  La convivialité urbaine ne se décrète pas, mais elle peut être favorisée par un aménagement approprié des espaces 
                  publics, des règlements qui l'autorisent et des équipements qui la facilitent. Comme le souligne Lisa Peattie, 
                  "la convivialité ne peut être forcée, mais elle peut être encouragée par de bonnes réglementations, de bons accessoires, 
                  et les bons espaces et lieux."
                </p>
              </section>

              <section id="caracteristiques">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">Caractéristiques d'une ville conviviale</h2>
                
                <p className="mb-6">
                  La ville conviviale se caractérise par plusieurs éléments qui favorisent les interactions sociales et le bien-être collectif :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#2A9D8F]">
                    <h3 className="text-xl font-bold mb-3 text-[#264653]">Espaces publics accessibles</h3>
                    <p>
                      Des places, parcs et rues accueillants pour tous, sans barrières physiques ou symboliques, 
                      qui invitent à la rencontre et au partage.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#E9C46A]">
                    <h3 className="text-xl font-bold mb-3 text-[#264653]">Interactions sociales spontanées</h3>
                    <p>
                      Des lieux qui favorisent les rencontres non planifiées et les échanges informels entre 
                      personnes de différents horizons.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#F4A261]">
                    <h3 className="text-xl font-bold mb-3 text-[#264653]">Échelle humaine</h3>
                    <p>
                      Un aménagement qui privilégie les relations de proximité, avec des distances marchables 
                      et des espaces à taille humaine.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#E76F51]">
                    <h3 className="text-xl font-bold mb-3 text-[#264653]">Gouvernance partagée</h3>
                    <p>
                      Une implication des citoyens dans les décisions qui concernent leur environnement urbain, 
                      favorisant l'appropriation collective des espaces.
                    </p>
                  </div>
                </div>

                <p>
                  Ces caractéristiques ne sont pas exhaustives, mais elles constituent des éléments essentiels pour 
                  créer des villes où la convivialité peut s'épanouir. Elles invitent à repenser l'urbanisme non plus 
                  seulement en termes de fonctionnalité ou d'esthétique, mais aussi en termes de potentiel relationnel 
                  et de capacité à générer des interactions sociales positives.
                </p>
              </section>
            </article>

            {/* Next/Prev Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link 
                to="/" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" /> Accueil
              </Link>
              <Link 
                to="/pourquoi-politique-publique" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                Pourquoi une politique publique ? <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Definition;

