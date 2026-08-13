import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, BarChart } from 'lucide-react';

const Implementation = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#E76F51] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mise en œuvre d'une politique de convivialité urbaine</h1>
            <p className="text-xl max-w-3xl">
              Comment mettre en place et évaluer une politique publique centrée sur la convivialité en milieu urbain.
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
            <span className="font-medium">Mise en œuvre</span>
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
                  <a href="#demarche" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Démarche intégrée et transversale
                  </a>
                </li>
                <li>
                  <a href="#indicateurs" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                    Indicateurs et évaluation
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/mesures-concretes" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Mesures concrètes <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/exemples" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">
                      Exemples <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="demarche" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653] flex items-center">
                  <Network size={28} className="mr-3 text-[#E76F51]" />
                  4.1 Démarche intégrée et transversale
                </h2>
                
                <p className="mb-6">
                  La mise en œuvre d'une politique de convivialité urbaine nécessite une approche intégrée qui dépasse les silos 
                  administratifs traditionnels. Cela implique :
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#264653]">Éléments clés d'une démarche intégrée</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#2A9D8F] font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#264653]">Création d'une délégation transversale</h4>
                        <p className="text-[#495057]">
                          Mise en place d'une mission "Convivialité urbaine" rattachée directement à la direction générale 
                          pour assurer une coordination efficace entre les services.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#2A9D8F] font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#264653]">Formation des agents municipaux</h4>
                        <p className="text-[#495057]">
                          Sensibilisation et formation des agents aux enjeux de la convivialité pour intégrer cette dimension 
                          dans l'ensemble des politiques publiques.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#2A9D8F] font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#264653]">Intégration de critères de convivialité</h4>
                        <p className="text-[#495057]">
                          Inclusion systématique de critères de convivialité dans les cahiers des charges des projets urbains 
                          et dans l'évaluation des politiques publiques.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#2A9D8F] font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#264653]">Coordination interservices</h4>
                        <p className="text-[#495057]">
                          Mise en place de groupes de travail transversaux réunissant les différents services concernés 
                          (urbanisme, culture, social, économie, etc.).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#2A9D8F]/20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-[#2A9D8F] font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#264653]">Articulation avec les autres politiques</h4>
                        <p className="text-[#495057]">
                          Intégration de la dimension conviviale dans les documents de planification (PLU, PDU, etc.) 
                          et dans les autres politiques sectorielles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Cette approche intégrée permet d'éviter les contradictions entre différentes politiques et de maximiser 
                  les synergies pour créer un environnement urbain véritablement convivial.
                </p>
              </section>

              <section id="indicateurs">
                <h2 className="text-3xl font-bold mb-6 text-[#264653] flex items-center">
                  <BarChart size={28} className="mr-3 text-[#E76F51]" />
                  4.2 Indicateurs et évaluation
                </h2>
                
                <p className="mb-6">
                  Pour mesurer l'efficacité d'une politique de convivialité urbaine, il est nécessaire de développer des indicateurs spécifiques :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#264653]">Indicateurs quantitatifs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span>Fréquentation des espaces publics</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span>Nombre d'événements organisés</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span>Diversité des usagers (âge, genre, etc.)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span>Nombre de tiers-lieux créés</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                        <span>Taux de participation aux dispositifs participatifs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#264653]">Indicateurs qualitatifs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#E9C46A] rounded-full mr-2"></span>
                        <span>Sentiment d'appartenance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#E9C46A] rounded-full mr-2"></span>
                        <span>Satisfaction des habitants</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#E9C46A] rounded-full mr-2"></span>
                        <span>Qualité des interactions sociales</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#E9C46A] rounded-full mr-2"></span>
                        <span>Perception de la sécurité</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#E9C46A] rounded-full mr-2"></span>
                        <span>Sentiment d'inclusion</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#264653]/5 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#264653]">Processus d'évaluation participative</h3>
                  <p className="mb-4">
                    L'évaluation d'une politique de convivialité urbaine gagne à être elle-même conviviale et participative. 
                    Cela peut prendre plusieurs formes :
                  </p>
                  <ul className="list-disc pl-6">
                    <li className="mb-2">
                      <strong>Ateliers d'évaluation citoyenne</strong> permettant aux habitants d'exprimer leur perception 
                      des changements induits par la politique de convivialité
                    </li>
                    <li className="mb-2">
                      <strong>Marches exploratoires</strong> pour observer in situ les usages et les interactions dans l'espace public
                    </li>
                    <li className="mb-2">
                      <strong>Enquêtes qualitatives</strong> auprès des différents acteurs concernés (habitants, commerçants, associations, etc.)
                    </li>
                    <li>
                      <strong>Comité d'évaluation pluraliste</strong> associant élus, techniciens, chercheurs, associations et citoyens
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#264653]">Observatoire de la convivialité urbaine</h3>
                  <p className="mb-4">
                    La création d'un observatoire de la convivialité urbaine peut permettre de :
                  </p>
                  <ul className="list-disc pl-6">
                    <li className="mb-2">Collecter et analyser des données sur les différents aspects de la convivialité</li>
                    <li className="mb-2">Suivre l'évolution des pratiques et des perceptions dans le temps</li>
                    <li className="mb-2">Comparer différents quartiers ou différentes villes</li>
                    <li className="mb-2">Identifier les bonnes pratiques et les facteurs de succès</li>
                    <li>Diffuser les connaissances et sensibiliser les acteurs</li>
                  </ul>
                </div>
              </section>
            </article>

            {/* Next/Prev Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link 
                to="/mesures-concretes" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" /> Mesures concrètes
              </Link>
              <Link 
                to="/exemples" 
                className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors"
              >
                Exemples <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;

