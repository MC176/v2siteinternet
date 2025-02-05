'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'


export default function IntroSection() {
  const features = [
    "Piscine privée",
    "Terrain de pétanque",
    "Grand espace extérieur",
    "En pleine nature",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4 sm:px-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Un havre de paix en Ardèche
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Découvrez nos 6 gîtes au sein de notre domaine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm">
                <CheckIcon className="w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>


          <Link
            href="/presentation"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Découvrir notre domaine
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
