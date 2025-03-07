'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, MapPin, Phone } from 'lucide-react';

const articles = [
  {
    id: 1,
    slug: 'guide-saint-montan-ardeche',
    title: 'Saint-Montan : Guide Complet du Village Médiéval (2024)',
    excerpt: 'Découvrez les secrets de Saint-Montan : restaurants, commerces, événements. Guide écrit par une famille locale installée depuis 30 ans.',
    image: '/images/presentation/chateau.jpg',
    category: 'Guide Local',
    readTime: '8 min',
    date: '2024-03-15',
    author: 'Pascale'
  },
  {
    id: 2,
    slug: 'gorges-ardeche-depuis-saint-montan',
    title: 'Gorges de l\'Ardèche : Itinéraire depuis Saint-Montan (12km)',
    excerpt: 'Notre guide détaillé pour accéder aux Gorges depuis votre gîte. Parking gratuit, meilleurs points de vue et conseils de locaux.',
    image: '/images/presentation/gorges.jpg',
    category: 'Itinéraires',
    readTime: '6 min',
    date: '2024-03-10'
  },
  {
    id: 3,
    slug: 'marches-locaux-saint-montan',
    title: 'Marchés Autour de Saint-Montan : Notre Guide 2024',
    excerpt: 'Les meilleurs marchés locaux : Saint-Montan (jeudi matin), Bourg-Saint-Andéol (mercredi), Viviers (samedi). Producteurs et horaires.',
    image: '/images/presentation/Image7.avif',
    category: 'Vie Locale',
    readTime: '5 min',
    date: '2024-03-05'
  }
];

const categories = [
  'Tous',
  'Guide Local',
  'Itinéraires',
  'Vie Locale',
  'Activités',
  'Restaurants'
];

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
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/presentation/chateau.jpg"
          alt="Vue aérienne de Saint-Montan en Ardèche, son château médiéval et ses ruelles pittoresques"
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
              Guide Local Saint-Montan
            </motion.h1>
            <motion.p 
              className="text-xl max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conseils d&apos;une famille ardéchoise pour votre séjour
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span>Saint-Montan, Ardèche (07220)</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="w-5 h-5" />
                <a href="tel:+33683060226" className="hover:underline">06 83 06 02 26</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
    </div>
  );
}