import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Users, Calendar, ShoppingBag } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });
const img = (name) => images[`../assets/images/${name}`];

const Measures = () => {
  const { content } = useContent('measures');
  const { espaces, tiersLieux, gouvernance, animation, economie } = content;
  const animationIcons = [Calendar, MapPin, Users];
  const animationColors = ['#E9C46A', '#2A9D8F', '#F4A261'];

  return (
    <div className="min-h-screen">
      <section className="bg-[#F4A261] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#264653]">{content.hero.title}</h1>
            <p className="text-xl max-w-3xl text-[#264653]">{content.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#F8F9FA] border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-[#495057]">
            <Link to="/" className="hover:text-[#2A9D8F]">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Mesures concrètes</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-[#264653]">Dans cette section</h3>
              <ul className="space-y-3">
                <li><a href="#espaces" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">Aménagement des espaces publics conviviaux</a></li>
                <li><a href="#tiers-lieux" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">Développement des tiers-lieux</a></li>
                <li><a href="#gouvernance" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">Gouvernance participative</a></li>
                <li><a href="#animation" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">Animation de l'espace public</a></li>
                <li><a href="#economie" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">Soutien à l'économie de la convivialité</a></li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li><Link to="/pourquoi-politique-publique" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Pourquoi une politique publique ? <ArrowRight size={16} className="ml-2" /></Link></li>
                  <li><Link to="/mise-en-oeuvre" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Mise en œuvre <ArrowRight size={16} className="ml-2" /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="espaces" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{espaces.title}</h2>
                <div className="mb-6"><img src={img(espaces.image)} alt="Espace public convivial" className="w-full h-64 object-cover rounded-lg shadow-md mb-4" /></div>
                <h3 className="text-2xl font-bold mb-4 text-[#264653]">{espaces.subtitle1}</h3>
                <p className="mb-4">{espaces.intro1}</p>
                <p className="mb-4">{espaces.listIntro1}</p>
                <ul className="list-disc pl-6 mb-6">
                  {espaces.axes.map((axe, i) => (
                    <li key={i} className="mb-2"><strong>{axe.label}</strong> : {axe.content}</li>
                  ))}
                </ul>
                <p className="mb-4">{espaces.intro2}</p>
                <h3 className="text-2xl font-bold mb-4 text-[#264653]">{espaces.subtitle2}</h3>
                <p className="mb-4">{espaces.intro3}</p>
                <ul className="list-disc pl-6 mb-6">
                  {espaces.list2.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                </ul>
              </section>

              <section id="tiers-lieux" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{tiersLieux.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <img src={img(tiersLieux.image1)} alt="Concept de tiers-lieu" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src={img(tiersLieux.image2)} alt="Espace de coworking" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
                <p className="mb-4">{tiersLieux.intro1}</p>
                <p className="mb-4">{tiersLieux.listIntro}</p>
                <ul className="list-disc pl-6 mb-6">
                  {tiersLieux.list.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                </ul>
                <p>{tiersLieux.conclusion}</p>
              </section>

              <section id="gouvernance" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{gouvernance.title}</h2>
                <div className="mb-6"><img src={img(gouvernance.image)} alt="Participation citoyenne" className="w-full h-64 object-cover rounded-lg shadow-md mb-4" /></div>
                <p className="mb-4">{gouvernance.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {gouvernance.cards.map((card, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                      <h4 className="text-lg font-bold mb-2 text-[#264653]">{card.title}</h4>
                      <p className="text-[#495057] mb-4 flex-grow">{card.content}</p>
                      <div className="text-sm text-[#2A9D8F]">{card.example}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="animation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{animation.title}</h2>
                <p className="mb-4">{animation.intro}</p>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  {animation.items.map((item, i) => {
                    const Icon = animationIcons[i % animationIcons.length];
                    const color = animationColors[i % animationColors.length];
                    return (
                      <div key={i} className={`flex items-start ${i < animation.items.length - 1 ? 'mb-4' : ''}`}>
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '33' }}>
                            <Icon size={20} style={{ color }} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1 text-[#264653]">{item.title}</h4>
                          <p className="text-[#495057]">{item.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="economie">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{economie.title}</h2>
                <p className="mb-4">{economie.intro}</p>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#264653]/10 rounded-full flex items-center justify-center mr-4">
                        <ShoppingBag size={24} className="text-[#264653]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#264653]">{economie.cardTitle}</h3>
                    </div>
                    <ul className="space-y-3">
                      {economie.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-[#2A9D8F] rounded-full mr-2"></span>
                          <span><strong>{item.label}</strong> {item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>{economie.conclusion}</p>
              </section>
            </article>

            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link to="/pourquoi-politique-publique" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" /> Pourquoi une politique publique ?
              </Link>
              <Link to="/mise-en-oeuvre" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
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
