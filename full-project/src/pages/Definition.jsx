import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });
const img = (name) => {
  if (!name) return undefined;
  const filename = name.split('/').pop();
  return images[`../assets/images/${filename}`];
};

const Definition = () => {
  const { content } = useContent('definition');
  const { illich, urbain, caracteristiques } = content;
  const cardBorders = ['#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];

  return (
    <div className="min-h-screen">
      <section className="bg-[#264653] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl max-w-3xl">{content.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#F8F9FA] border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-[#495057]">
            <Link to="/" className="hover:text-[#2A9D8F]">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Définition et concept</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-[#264653]">Dans cette section</h3>
              <ul className="space-y-3">
                <li><a href="#illich" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">{illich.title.replace(/^1\.1\s*/, '')}</a></li>
                <li><a href="#urbain" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">{urbain.title.replace(/^1\.2\s*/, '')}</a></li>
                <li><a href="#caracteristiques" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">{caracteristiques.title}</a></li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li><Link to="/pourquoi-politique-publique" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Pourquoi une politique publique ? <ArrowRight size={16} className="ml-2" /></Link></li>
                  <li><Link to="/mesures-concretes" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Mesures concrètes <ArrowRight size={16} className="ml-2" /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="illich" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{illich.title}</h2>
                <p className="mb-4">{illich.intro}</p>
                <div className="bg-[#E9C46A]/10 border-l-4 border-[#E9C46A] p-4 my-6">
                  <div className="flex">
                    <Quote size={24} className="text-[#E9C46A] mr-3 flex-shrink-0" />
                    <blockquote className="italic">
                      "{illich.quote}"
                      <footer className="text-base mt-2 text-[#495057] not-italic">{illich.quoteAuthor}</footer>
                    </blockquote>
                  </div>
                </div>
                <p className="mb-4">{illich.listIntro}</p>
                <ul className="list-disc pl-6 mb-6">
                  {illich.list.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                </ul>
                <p>{illich.conclusion}</p>
              </section>

              <section id="urbain" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{urbain.title}</h2>
                <div className="mb-6">
                  <img src={img(urbain.image)} alt={urbain.imageCaption} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
                  <p className="text-sm text-gray-500 italic text-center">{urbain.imageCaption}</p>
                </div>
                <p className="mb-4">{urbain.intro}</p>
                <div className="bg-[#2A9D8F]/10 border-l-4 border-[#2A9D8F] p-4 my-6">
                  <div className="flex">
                    <Quote size={24} className="text-[#2A9D8F] mr-3 flex-shrink-0" />
                    <blockquote className="italic">
                      "{urbain.quote}"
                      <footer className="text-base mt-2 text-[#495057] not-italic">{urbain.quoteAuthor}</footer>
                    </blockquote>
                  </div>
                </div>
                <p>{urbain.conclusion}</p>
              </section>

              <section id="caracteristiques">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{caracteristiques.title}</h2>
                <p className="mb-6">{caracteristiques.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {caracteristiques.cards.map((card, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-6 border-t-4" style={{ borderTopColor: cardBorders[i % cardBorders.length] }}>
                      <h3 className="text-xl font-bold mb-3 text-[#264653]">{card.title}</h3>
                      <p>{card.content}</p>
                    </div>
                  ))}
                </div>
                <p>{caracteristiques.conclusion}</p>
              </section>
            </article>

            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link to="/" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" /> Accueil
              </Link>
              <Link to="/pourquoi-politique-publique" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
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
