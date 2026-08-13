import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Users, Calendar, ShoppingBag } from 'lucide-react';
import espacePublic from '../assets/images/espace-public.jpg';
import tiersLieu from '../assets/images/tiers-lieu.png';
import coworking from '../assets/images/coworking.jpg';
import participation from '../assets/images/participation.jpg';

const Measures = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F4A261] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#264653]">Mesures concrètes pour une politique de convivialité urbaine</h1>
            <p className="text-xl max-w-3xl text-[#264653]">
              Découvrez les actions pratiques pour transformer nos villes en espaces de convivialité et de bien-être collectif.
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
            <span className="font-medium">Mesures concrètes</span>
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
                  <a href="#espaces" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Aménagement des espaces publics conviviaux
                  </a>
                </li>
                <li>
                  <a href="#tiers-lieux" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Développement des tiers-lieux
                  </a>
                </li>
                <li>
                  <a href="#gouvernance" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Gouvernance participative
                  </a>
                </li>
                <li>
                  <a href="#animation" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Animation de l'espace public
                  </a>
                </li>
                <li>
                  <a href="#economie" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Soutien à l'économie de la convivialité
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
                    <Link to="/mise-en-oeuvre" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Mise en œuvre <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="espaces" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">3.1 Aménagement des espaces publics conviviaux</h2>
                
                <div className="mb-6">
                  <img 
                    src={espacePublic} 
                    alt="Espace public convivial" 
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#264653]">3.1.1 Rues conviviales</h3>
                
                <p className="mb-4">
                  La transformation des rues en espaces conviviaux constitue une mesure fondamentale. L'approche des "rues conviviales", 
                  comme celle développée par la ville de Québec, vise à créer "un réseau de rues et d'espaces publics qui améliore la 
                  qualité des milieux de vie et le vivre ensemble".
                </p>

                <p className="mb-4">
                  Cette approche s'articule autour de trois axes :
                </p>

                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    <strong>Axe actif</strong> : favoriser les mobilités douces (marche, vélo), réduire la place de la voiture, 
                    élargir les trottoirs, créer des placettes publiques
                  </li>
                  <li className="mb-2">
                    <strong>Axe vert</strong> : végétaliser l'espace public, planter des arbres, créer des îlots de fraîcheur
                  </li>
                  <li>
                    <strong>Axe hiver</strong> : adapter l'espace public aux conditions hivernales, faciliter le déneigement, 
                    installer du mobilier urbain adapté
                  </li>
                </ul>

                <p className="mb-4">
                  L'urbanisme tactique constitue un outil privilégié pour expérimenter ces transformations à moindre coût avant de les pérenniser. 
                  Ces "aménagements éclairs" permettent de tester rapidement de nouvelles configurations de l'espace public et de les ajuster 
                  en fonction des retours des usagers.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-[#264653]">3.1.2 Places publiques et espaces de rencontre</h3>
                
                <p className="mb-4">
                  La création ou la requalification de places publiques conviviales est une autre mesure essentielle. Ces espaces doivent être conçus pour :
                </p>

                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Accueillir une diversité d'usages et d'usagers</li>
                  <li className="mb-2">Offrir du mobilier urbain favorisant les interactions (bancs disposés en face à face, tables de pique-nique, etc.)</li>
                  <li className="mb-2">Intégrer des éléments ludiques et artistiques</li>
                  <li className="mb-2">Proposer des zones ombragées et des points d'eau</li>
                  <li>Accueillir des événements et des animations régulières</li>
                </ul>
              </section>

              <section id="tiers-lieux" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">3.2 Développement des tiers-lieux</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img 
                      src={tiersLieu} 
                      alt="Concept de tiers-lieu" 
                      className="w-full h-48 object-cover rounded-lg shadow-md" 
                    />
                  </div>
                  <div>
                    <img 
                      src={coworking} 
                      alt="Espace de coworking" 
                      className="w-full h-48 object-cover rounded-lg shadow-md" 
                    />
                  </div>
                </div>

                <p className="mb-4">
                  Les tiers-lieux représentent un levier majeur pour une politique de convivialité urbaine. Comme le définit l'Agence Nationale 
                  de la Cohésion des Territoires (ANCT), ces espaces hybrides et flexibles "favorisent la rencontre, le partage et l'initiative collective".
                </p>

                <p className="mb-4">
                  Ils se caractérisent par :
                </p>

                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">L'entraide, l'innovation ouverte et la mutualisation entre pairs</li>
                  <li className="mb-2">L'expérimentation et la création</li>
                  <li className="mb-2">L'ouverture, la mixité et la convivialité</li>
                  <li className="mb-2">La libre contribution et la gouvernance partagée</li>
                  <li>L'hybridation d'activités et de revenus</li>
                </ul>

                <p>
                  Une politique publique de soutien aux tiers-lieux peut s'inspirer du programme national "Nouveaux lieux, nouveaux liens" 
                  qui propose des dispositifs de labellisation et de financement, un accompagnement en ingénierie pour les porteurs de projets, 
                  et un soutien aux réseaux régionaux de tiers-lieux.
                </p>
              </section>

              <section id="gouvernance" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">3.3 Gouvernance participative et implication citoyenne</h2>
                
                <div className="mb-6">
                  <img 
                    src={participation} 
                    alt="Participation citoyenne" 
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
                  />
                </div>

                <p className="mb-4">
                  Une politique de convivialité urbaine doit nécessairement s'appuyer sur une gouvernance renouvelée qui place les citoyens 
                  au cœur des décisions. Plusieurs mesures peuvent être envisagées :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <h4 className="text-lg font-bold mb-2 text-[#264653]">Budgets participatifs</h4>
                    <p className="text-[#495057] mb-4 flex-grow">
                      Dédiés à des projets de convivialité urbaine, permettant aux citoyens de proposer et de choisir des projets.
                    </p>
                    <div className="text-sm text-[#2A9D8F]">Exemple : Budget participatif de Paris</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <h4 className="text-lg font-bold mb-2 text-[#264653]">Urbanisme collaboratif</h4>
                    <p className="text-[#495057] mb-4 flex-grow">
                      Impliquant les habitants dans la conception des espaces publics, de la phase de diagnostic à la réalisation.
                    </p>
                    <div className="text-sm text-[#2A9D8F]">Exemple : Superblocks de Barcelone</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <h4 className="text-lg font-bold mb-2 text-[#264653]">Droit d'expérimentation</h4>
                    <p className="text-[#495057] mb-4 flex-grow">
                      Permettant aux citoyens de tester temporairement de nouveaux usages de l'espace public.
                    </p>
                    <div className="text-sm text-[#2A9D8F]">Exemple : Permis de végétaliser à Lyon</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                    <h4 className="text-lg font-bold mb-2 text-[#264653]">Charte de la convivialité urbaine</h4>
                    <p className="text-[#495057] mb-4 flex-grow">
                      Co-construite avec les habitants, définissant les principes et engagements pour une ville plus conviviale.
                    </p>
                    <div className="text-sm text-[#2A9D8F]">Exemple : Charte des espaces publics de Bordeaux</div>
                  </div>
                </div>
              </section>

              <section id="animation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">3.4 Animation et programmation de l'espace public</h2>
                
                <p className="mb-4">
                  La convivialité ne se décrète pas uniquement par l'aménagement physique, elle nécessite également une animation régulière de l'espace public :
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-[#E9C46A]/20 rounded-full flex items-center justify-center">
                        <Calendar size={20} className="text-[#E9C46A]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-[#264653]">Événements de proximité</h4>
                      <p className="text-[#495057]">
                        Fêtes de quartier, repas partagés, cinéma en plein air, concerts de proximité, etc.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center">
                        <MapPin size={20} className="text-[#2A9D8F]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-[#264653]">Programmation culturelle décentralisée</h4>
                      <p className="text-[#495057]">
                        Spectacles, expositions et activités culturelles dans les différents quartiers de la ville.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-[#F4A261]/20 rounded-full flex items-center justify-center">
                        <Users size={20} className="text-[#F4A261]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-[#264653]">Ateliers participatifs</h4>
                      <p className="text-[#495057]">
                        Jardinage collectif, réparation, artisanat, cuisine partagée, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="economie">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">3.5 Soutien à l'économie de la convivialité</h2>
                
                <p className="mb-4">
                  Une politique de convivialité urbaine doit également soutenir les acteurs économiques qui contribuent à créer du lien social :
                </p>

                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#264653]/10 rounded-full flex items-center justify-center mr-4">
                        <ShoppingBag size={24} className="text-[#264653]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#264653]">Acteurs de l'économie de la convivialité</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span><strong>Commerces de proximité</strong> avec des dispositifs d'aide à l'installation et à la rénovation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span><strong>Cafés associatifs</strong> et autres lieux de sociabilité avec un statut juridique et fiscal adapté</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span><strong>Coopératives citoyennes</strong> pour la gestion de services de proximité</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span><strong>Monnaies locales</strong> favorisant les échanges au sein du territoire</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span><strong>Économie sociale et solidaire</strong> avec des appels à projets dédiés à la convivialité</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Ces différentes mesures forment un socle cohérent pour initier une politique de convivialité urbaine. 
                  Leur mise en œuvre nécessite une approche intégrée et transversale, qui sera détaillée dans la section suivante.
                </p>
              </section>
            </article>

            {/* Next/Prev Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link 
                to="/pourquoi-politique-publique" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" /> Pourquoi une politique publique ?
              </Link>
              <Link 
                to="/mise-en-oeuvre" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                Mise en œuvre <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measures;

