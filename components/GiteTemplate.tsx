'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface GiteTemplateProps {
  name: string
  description: string
  images: string[]
  equipments: string[]
}

export default function GiteTemplate({ name, description, images, equipments }: GiteTemplateProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{name}</h1>

          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            {images.length > 0 && (
              <Image
                src={images[currentImageIndex]}
                alt={`${name} - Photo ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            )}
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={previousImage}
                  className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  →
                </button>
              </div>
            )}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-8">{description}</p>

            <h2 className="text-2xl font-semibold mb-4">Équipements</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {equipments.map((equipment, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  {equipment}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/disponibilites"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-block"
              >
                Voir les disponibilités
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}