import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const Examples = () => {
  const { content } = useContent('examples');
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#E9C46A] text-[#264653] py-20">
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
            <span className="font-medium">Exemples</span>
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
                  <a href="#villes" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Exemples de villes
                  </a>
                </li>
                <li>
                  <a href="#projets" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Projets inspirants
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/mise-en-oeuvre" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Mise en œuvre <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Contact <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="villes" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653] flex items-center">
                  <Globe size={28} className="mr-3 text-[#E9C46A]" />
                  Exemples de villes
                </h2>
                
                <p className="mb-6">
                  De nombreuses villes à travers le monde ont mis en place des politiques qui favorisent la convivialité urbaine. 
                  Voici quelques exemples inspirants :
                </p>

                {/* Example 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin size={24} className="text-[#E76F51] mr-2" />
                      <h3 className="text-2xl font-bold text-[#264653]">Barcelone (Espagne) : Les Superblocks</h3>
                    </div>
                    
                    <p className="mb-4">
                      Barcelone a développé le concept de "superblocks" (superilles), des zones urbaines où la circulation automobile 
                      est limitée pour créer des espaces publics plus conviviaux. Chaque superblock regroupe plusieurs îlots urbains 
                      et privilégie les déplacements à pied, à vélo et les activités sociales.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-[#264653] mb-2">Résultats :</h4>
                      <ul className="list-disc pl-6">
                        <li>Réduction de 40% du trafic automobile dans les zones concernées</li>
                        <li>Augmentation de 10% des déplacements à pied et à vélo</li>
                        <li>Création de 3,9 hectares d'espaces publics récupérés sur la voiture</li>
                        <li>Réduction de la pollution sonore et atmosphérique</li>
                        <li>Développement de nouvelles activités sociales et économiques</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#264653] mb-2">Facteurs de succès :</h4>
                      <ul className="list-disc pl-6">
                        <li>Approche progressive et expérimentale</li>
                        <li>Forte implication des habitants dans la conception et l'animation des espaces</li>
                        <li>Accompagnement des transformations par des événements culturels et festifs</li>
                        <li>Soutien politique fort et vision à long terme</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin size={24} className="text-[#2A9D8F] mr-2" />
                      <h3 className="text-2xl font-bold text-[#264653]">Nantes (France) : Les Bancs de Nantes</h3>
                    </div>
                    
                    <p className="mb-4">
                      La ville de Nantes a lancé en 2018 une politique ambitieuse d'installation de bancs publics, considérés comme 
                      des "équipements de convivialité" essentiels. Cette initiative s'inscrit dans une démarche plus large de 
                      valorisation de l'espace public comme lieu de rencontre et de partage.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-[#264653] mb-2">Résultats :</h4>
                      <ul className="list-disc pl-6">
                        <li>Installation de plus de 1 000 nouveaux bancs dans l'espace public</li>
                        <li>Création de "parcours assis" pour les personnes à mobilité réduite</li>
                        <li>Développement de bancs innovants (connectés, ludiques, artistiques)</li>
                        <li>Augmentation de la fréquentation des espaces publics</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#264653] mb-2">Facteurs de succès :</h4>
                      <ul className="list-disc pl-6">
                        <li>Consultation des habitants sur l'emplacement et le design des bancs</li>
                        <li>Approche inclusive prenant en compte les besoins des différents publics</li>
                        <li>Communication efficace autour du projet</li>
                        <li>Intégration dans une politique plus large de valorisation de l'espace public</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Example 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin size={24} className="text-[#F4A261] mr-2" />
                      <h3 className="text-2xl font-bold text-[#264653]">Québec (Canada) : Rues Conviviales</h3>
                    </div>
                    
                    <p className="mb-4">
                      La ville de Québec a développé un programme de "rues conviviales" visant à transformer progressivement 
                      son réseau viaire en espaces publics de qualité. Ce programme s'articule autour de trois axes : 
                      actif (mobilités douces), vert (végétalisation) et hiver (adaptation aux conditions hivernales).
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-[#264653] mb-2">Résultats :</h4>
                      <ul className="list-disc pl-6">
                        <li>Réaménagement de plusieurs artères commerciales en espaces partagés</li>
                        <li>Création de placettes publiques sur d'anciens espaces de stationnement</li>
                        <li>Plantation de plus de 500 arbres dans les rues réaménagées</li>
                        <li>Augmentation de la fréquentation des commerces de proximité</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#264653] mb-2">Facteurs de succès :</h4>
                      <ul className="list-disc pl-6">
                        <li>Approche saisonnière adaptée au climat local</li>
                        <li>Collaboration étroite avec les commerçants et les associations de quartier</li>
                        <li>Utilisation de l'urbanisme tactique pour tester les aménagements</li>
                        <li>Évaluation continue et ajustements en fonction des retours d'expérience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="projets">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">Projets inspirants</h2>
                
                <p className="mb-6">
                  Au-delà des politiques globales, de nombreux projets ponctuels contribuent à créer de la convivialité en milieu urbain :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Project 1 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3 text-[#264653]">Les Grands Voisins (Paris)</h3>
                      <p className="mb-4 flex-grow">
                        Occupation temporaire de l'ancien hôpital Saint-Vincent-de-Paul à Paris, transformé en lieu de vie, 
                        de travail et d'hébergement social. Ce projet a créé un véritable laboratoire de la convivialité urbaine, 
                        mêlant différents publics et usages.
                      </p>
                      <div className="text-sm text-[#2A9D8F]">
                        <strong>Impact :</strong> Plus de 250 structures accueillies, 2000 personnes hébergées, 
                        et un modèle qui a inspiré de nombreux projets similaires.
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3 text-[#264653]">Rue aux Enfants (France)</h3>
                      <p className="mb-4 flex-grow">
                        Initiative qui consiste à fermer temporairement une rue à la circulation motorisée pour permettre 
                        aux enfants de jouer librement et en toute sécurité. Ces événements sont l'occasion de réinventer 
                        collectivement l'usage de la rue.
                      </p>
                      <div className="text-sm text-[#2A9D8F]">
                        <strong>Impact :</strong> Plus de 150 rues aux enfants labellisées en France, 
                        créant des dynamiques durables dans les quartiers concernés.
                      </div>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3 text-[#264653]">Incredible Edible (Royaume-Uni)</h3>
                      <p className="mb-4 flex-grow">
                        Mouvement né à Todmorden (Royaume-Uni) qui consiste à planter des légumes et des fruits dans l'espace public, 
                        en libre-service pour les habitants. Cette initiative crée des lieux de rencontre autour du jardinage et de l'alimentation.
                      </p>
                      <div className="text-sm text-[#2A9D8F]">
                        <strong>Impact :</strong> Mouvement désormais présent dans plus de 500 communautés à travers le monde, 
                        créant des liens sociaux et une sensibilisation à l'alimentation locale.
                      </div>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-3 text-[#264653]">Parking Day (International)</h3>
                      <p className="mb-4 flex-grow">
                        Événement mondial où des citoyens, artistes et activistes transforment temporairement des places de stationnement 
                        en espaces publics conviviaux (mini-parcs, salons urbains, etc.). Cette initiative questionne la place de la voiture 
                        en ville et propose des alternatives.
                      </p>
                      <div className="text-sm text-[#2A9D8F]">
                        <strong>Impact :</strong> Organisé dans plus de 200 villes dans le monde, 
                        certaines installations temporaires ont été pérennisées sous forme de "parklets".
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Ces exemples montrent qu'il existe de nombreuses façons de favoriser la convivialité en milieu urbain, 
                  à différentes échelles et avec différents moyens. Ils témoignent de l'importance de l'expérimentation, 
                  de la participation citoyenne et de l'adaptation aux contextes locaux.
                </p>
              </section>
            </article>

            {/* Next/Prev Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link 
                to="/mise-en-oeuvre" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" /> Mise en œuvre
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                Contact <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;

