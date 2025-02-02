'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-2 mb-6">Un havre de paix en Ardèche</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nichés au cœur de l&apos;Ardèche, nos gîtes vous offrent un séjour inoubliable 
            dans un cadre authentique. Profitez du calme de la nature tout en 
            bénéficiant de tout le confort moderne.
          </p>
          <Link 
            href="/gites"
            className="btn-primary"
          >
            Découvrir nos gîtes
          </Link>
        </motion.div>
      </div>
    </section>
  )
}