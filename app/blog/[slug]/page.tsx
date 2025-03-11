'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  excerpt?: string;
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        if (!response.ok) {
          throw new Error('Article non trouvé');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {error || 'Article non trouvé'}
        </h1>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="mr-2" />
          Retour aux articles
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="mr-2" />
        Retour aux articles
      </Link>

      {post.image && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center text-gray-600 mb-8">
        <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </motion.article>
  );
}