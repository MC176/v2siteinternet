'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
  category?: string;
}

const categories = [
  'Tous',
  'Destinations',
  'Activités',
  'Gastronomie',
  'Culture',
  'Nature'
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/presentation/Image7.avif")',
            filter: 'brightness(0.65)'
          }}
        />
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
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.image && (
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('fr-FR')}
                    </span>
                    {post.category && (
                      <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
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

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun article ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}