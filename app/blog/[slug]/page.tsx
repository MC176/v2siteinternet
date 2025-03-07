'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample article data - In a real app, this would come from an API/CMS
const article = {
  title: 'Les trésors cachés de l\'Ardèche : Guide complet',
  excerpt: 'Explorez les merveilles naturelles et culturelles de l\'Ardèche, des Gorges aux villages médiévaux.',
  image: '/images/presentation/gorges.jpg',
  category: 'Destinations',
  readTime: '5 min',
  date: '15 Mars 2024',
  author: {
    name: 'Pascale',
    image: '/images/logo/logo.avif',
    role: 'Propriétaire du Mas d\'Eylieux'
  },
  content: `
    <h2>Une terre de contrastes et de beautés</h2>
    <p>L'Ardèche est une terre qui ne cesse d'émerveiller ses visiteurs. Entre ses gorges spectaculaires, ses villages perchés et sa gastronomie unique, chaque coin de ce département recèle des trésors à découvrir.</p>
    
    <h2>Les incontournables de l'Ardèche</h2>
    <p>Parmi les sites à ne pas manquer lors de votre séjour :</p>
    <ul>
      <li>Les Gorges de l'Ardèche et le Pont d'Arc</li>
      <li>La Grotte Chauvet 2</li>
      <li>Le village médiéval de Saint-Montan</li>
      <li>Les champs de lavande du plateau ardéchois</li>
    </ul>

    <h2>Activités et expériences uniques</h2>
    <p>L'Ardèche offre une multitude d'activités pour tous les goûts :</p>
    <ul>
      <li>Descente en canoë des Gorges</li>
      <li>Randonnées sur les sentiers balisés</li>
      <li>Dégustation de produits locaux</li>
      <li>Visites de caves viticoles</li>
    </ul>
  `,
  relatedArticles: [
    {
      slug: 'activites-famille-ardeche',
      title: 'Top 10 des activités en famille en Ardèche',
      image: '/images/informations/canoe.jpg'
    },
    {
      slug: 'gastronomie-ardeche',
      title: 'Saveurs de l\'Ardèche : Guide gastronomique',
      image: '/images/presentation/Image7.avif'
    }
  ]
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {article.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
          <Link 
            href="/blog"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {article.readTime} de lecture
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={article.author.image}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium">{article.author.name}</h3>
            <p className="text-sm text-gray-600">{article.author.role}</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Related Articles */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-6">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.relatedArticles.map((relatedArticle) => (
              <Link 
                key={relatedArticle.slug}
                href={`/blog/${relatedArticle.slug}`}
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">
                  {relatedArticle.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}