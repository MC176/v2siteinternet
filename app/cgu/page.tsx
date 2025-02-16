'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function CGU() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8"><br/><br/>Conditions Générales d&apos;Utilisation</h1>
        <div className="prose prose-black max-w-none">
          <span className="text-xl font-bold underline">Article 1 - Acceptation des conditions :</span><br/><br/>
          <p>L&apos;accès et l&apos;utilisation du site Le Mas d&apos;Eylieux sont soumis aux présentes conditions générales d&apos;utilisation ainsi qu&apos;aux lois et/ou règlements applicables.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 2 - Propriété et création du site Internet :</span><br/><br/>
          <p>Le site internet  est la propriété exclusive du Mas d&apos;Eylieux, qui l&apos;a conçu et développé intégralement. Toute utilisation, reproduction, ou représentation, totale ou partielle, sans autorisation expresse est interdite.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 3 - Protection des données personnelles :</span><br/><br/>
          <p>Les informations recueillies sur ce site sont utilisées uniquement dans le cadre de la relation client et ne sont en aucun cas communiquées à des tiers.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 4 - Propriété intellectuelle :</span><br/><br/>
          <p>L&apos;ensemble des éléments figurant sur ce site (textes, photographies, logos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction ou représentation, en tout ou partie, est interdite.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 5 - Photographies et crédits :</span><br/><br/>
          <p>Certaines photographies utilisées dans l&apos;onglet -Information- peuvent provenir de différentes sources Internet. Si une photographie vous appartient et vous souhaitez qu&apos;elle soit retireée, veuillez nous contacter.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 6 - Responsabilité :</span><br/><br/>
          <p>Le Mas d&apos;Eylieux s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.</p>
          <br/><br/>

          <span className="text-xl font-bold underline">Article 7 - Liens hypertextes :</span><br/><br/>
          <p>Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité du Mas d&apos;Eylieux.</p>
          <br/><br/>
        </div>
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-blue-500 mt-8 hover:underline"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </button>
      </div>
    </div>
  )
}
