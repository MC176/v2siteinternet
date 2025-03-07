'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, ChevronDown } from 'lucide-react';

// Sample blog data - In a real app, this would come from an API/CMS
const articles = [
  {
    id: 1,
    slug: 'decouvrir-ardeche',
    title: 'Les trésors cachés de l\'Ardèche : Guide complet',
    excerpt: 'Explorez les merveilles naturelles et culturelles de l\'Ardèche, des Gorges aux villages médiévaux.',
    image: '/images/presentation/gorges.jpg',
    category: 'Destinations',
    readTime: '5 min',
    date: '2024-03-15'
  },
  {
    id: 2,
    slug: 'activites-famille-ardeche',
    title: 'Top 10 des activités en famille en Ardèche',
    excerpt: 'Des activités pour tous les âges : canoë, spéléologie, randonnées et plus encore.',
    image: '/images/informations/canoe.jpg',
    category: 'Activités',
    readTime: '4 min',
    date: '2024-03-10'
  },
  {
    id: 3,
    slug: 'gastronomie-ardeche',
    title: 'Saveurs de l\'Ardèche : Guide gastronomique',
    excerpt: 'Découvrez les spécialités locales et les meilleurs restaurants de la région.',
    image: '/images/presentation/Image7.avif',
    category: 'Gastronomie',
    readTime: '6 min',
    date: '2024-03-05'
  }
];

const categories = [
  'Tous',
  'Destinations',
  'Activités',
  'Gastronomie',
  'Culture',
  'Nature'
];

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Comment se rendre à Saint-Montan ?",
    answer: "Saint-Montan est accessible en voiture depuis l'autoroute A7, sortie Montélimar Sud. Le village se trouve à environ 20 minutes de la sortie. En train, la gare la plus proche est celle de Montélimar, puis il faut prendre un bus ou un taxi."
  },
  {
    id: 2,
    question: "Quels sont les meilleurs moments pour visiter ?",
    answer: "La période idéale s'étend d'avril à octobre. Le printemps offre un climat doux et des paysages fleuris, l'été est parfait pour les activités de plein air, et l'automne propose des couleurs magnifiques avec moins de touristes."
  },
  {
    id: 3,
    question: "Y a-t-il des restaurants dans le village ?",
    answer: "Oui, Saint-Montan compte plusieurs restaurants de qualité, notamment 'La Table de la Fontaine' au cœur du village et 'L'Auberge de Montfleury' avec sa terrasse panoramique. Nous recommandons de réserver en haute saison."
  },
  {
    id: 4,
    question: "Que faire avec des enfants à Saint-Montan ?",
    answer: "Le village offre de nombreuses activités familiales : visite du château médiéval, chasse au trésor dans les ruelles, randonnées adaptées, et baignade dans l'Ardèche à proximité. La grotte Chauvet 2 est également à 30 minutes en voiture."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/presentation/Image7.avif"
          alt="Blog hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Le Blog du Mas d&apos;Eylieux
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Découvrez nos articles sur l&apos;Ardèche, ses trésors et nos conseils pour un séjour inoubliable
            </motion.p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 group">
                    <span className="font-medium">Lire l&apos;article</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600">
            Tout ce que vous devez savoir pour votre séjour à Saint-Montan
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}