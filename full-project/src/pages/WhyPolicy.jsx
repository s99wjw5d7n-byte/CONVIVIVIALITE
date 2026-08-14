import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Leaf } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const WhyPolicy = () => {
  const { content } = useContent('whyPolicy');
  const { enjeux, benefices } = content;
  const cardIcons = [Users, Leaf, Shield, TrendingUp];
  const cardColors = ['#E76F51', '#2A9D8F', '#E9C46A', '#F4A261'];

  return (
    <div className="min-h-screen">
      <section className="bg-[#2A9D8F] text-white py-20">
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
            <span className="font-medium">Pourquoi une politique publique ?</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-[#264653]">Dans cette section</h3>
              <ul className="space-y-3">
                <li><a href="#enjeux" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">{enjeux.title.replace(/^2\.1\s*/, '')}</a></li>
                <li><a href="#benefices" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">{benefices.title.replace(/^2\.2\s*/, '')}</a></li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#264653]">Sections connexes</h3>
                <ul className="space-y-3">
                  <li><Link to="/definition" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Définition et concept <ArrowRight size={16} className="ml-2" /></Link></li>
                  <li><Link to="/mesures-concretes" className="text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors flex items-center">Mesures concrètes <ArrowRight size={16} className="ml-2" /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <section id="enjeux" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{enjeux.title}</h2>
                <p className="mb-6">{enjeux.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {enjeux.cards.map((card, i) => {
                    const Icon = cardIcons[i % cardIcons.length];
                    const color = cardColors[i % cardColors.length];
                    return (
                      <div key={i} className="bg-white rounded-lg shadow-md p-6 flex">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '33' }}>
                            <Icon size={24} style={{ color }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#264653]">{card.title}</h3>
                          <p className="text-[#495057]">{card.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p>{enjeux.conclusion}</p>
              </section>

              <section id="benefices">
                <h2 className="text-3xl font-bold mb-6 text-[#264653]">{benefices.title}</h2>
                <p className="mb-6">{benefices.intro}</p>
                <div className="overflow-hidden rounded-lg shadow-md mb-8">
                  <table className="min-w-full bg-white">
                    <thead className="bg-[#264653] text-white">
                      <tr><th className="py-3 px-4 text-left">Bénéfice</th><th className="py-3 px-4 text-left">Description</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {benefices.items.map((item, i) => (
                        <tr key={i}>
                          <td className="py-3 px-4 font-medium">{item.title}</td>
                          <td className="py-3 px-4">{item.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>{benefices.conclusion}</p>
              </section>
            </article>

            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              <Link to="/definition" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
                <ArrowRight size={16} className="mr-2 rotate-180" /> Définition et concept
              </Link>
              <Link to="/mesures-concretes" className="inline-flex items-center text-[#2A9D8F] hover:text-[#2A9D8F]/80 transition-colors">
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
