'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function CGV() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8"><br/><br/>Conditions Générales de Vente</h1>
        <div className="prose prose-gray max-w-none">
          <p>
            <span className="text-xl font-bold underline">Article 1 - Durée du Séjour :</span><br/><br/>
            le client signataire du présent contrat conclu pour une durée déterminée ne pourra en aucune circonstance se prévaloir d'un quelconque droit au maintien dans les lieux.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 2 - Conclusion du contrat :</span><br/><br/>
            la réservation devient effective dès lors que le client aura fait parvenir au propriétaire un exemplaire du contrat signé et un acompte de 25% du montant total du prix du séjour, avant la date indiquée sur le contrat.<br/>
            Un exemplaire du contrat est à conserver par le client.<br/>
            Le contrat conclu entre les parties au présent acte ne peut en aucun cas bénéficier même partiellement à des tiers, personnes physiques ou morales, sauf accord écrit du propriétaire.<br/>
            Toute infraction à ce dernier alinéa serait susceptible d'entraîner la résiliation immédiate du séjour aux torts du client, le prix du séjour restant définitivement acquis au propriétaire.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 3 - Annulation par le client :</span><br/><br/>
            toute annulation doit être notifiée par e-mail, adressé au propriétaire.<br/><br/>
            a) Annulation avant l'arrivée dans les lieux : <br/>
            l'acompte reste acquis au propriétaire. Celui-ci pourra demander le solde du montant du séjour, si l'annulation intervient moins de 30 jours avant la date prévue d'entrée dans les lieux.<br/>
            Si le client ne se manifeste pas dans les 24 heures qui suivent la date d'arrivée indiquée sur le contrat, le présent contrat devient nul et le propriétaire peut disposer du gîte. L'acompte reste acquis au propriétaire qui demandera le paiement du solde du séjour.<br/><br/>
            b) Si le séjour est écourté, le prix du séjour reste acquis au propriétaire. Dans ce cas, il ne sera procédé à aucun remboursement.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 4 - Annulation par le propriétaire :</span><br/><br/>
            le propriétaire reverse au client l'intégralité des sommes versées.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 5 - Arrivée :</span><br/><br/>
            le client doit se présenter le jour précisé et l'heure mentionnée sur le présent contrat.<br/>
            En cas d'arrivée tardive ou différée, le client doit prévenir le propriétaire.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 6 - Règlement du solde :</span><br/><br/>
            Le solde du prix du séjour est à régler au plus tard 7 jours avant votre arrivée dans les lieux.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 7 - Taxe de séjour :</span><br/><br/>
            la taxe de séjour (d'un montant de 1.30 pour les gîtes 3 étoiles et 0.99 pour les gîtes 2 étoiles par jour et par personne de plus de 18 ans) est un impôt local que le client doit acquitter auprès du propriétaire qui la reverse ensuite au Trésor Public.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 8 - Dépôt de garantie ou caution :</span><br/><br/>
            à l'arrivée du client, un dépôt de garantie dont le montant est indiqué sur le contrat, est demandé par le propriétaire. Après l'établissement contradictoire de l'état des lieux de sortie, ce dépôt est restitué sous 7 jours maximum, déduction faite du coût de remise en état des lieux, si des dégradations ont été constatées.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 10 - Etat des lieux :</span><br/><br/>
            un inventaire est établi en commun et signé par le client et le propriétaire ou son représentant à l'arrivée et au départ du gîte. Cet inventaire constitue la seule référence en cas de litige concernant l'état des lieux.<br/>
            L'état de propreté du gîte à l'arrivée du client devra être constaté dans l'état des lieux. Le nettoyage des locaux est à la charge du client pendant le séjour et avant son départ. Le montant des éventuels frais de ménage est établi sur la base de calcul mentionnée sur le contrat.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 11 - Utilisation des lieux :</span><br/><br/>
            le client devra assurer le caractère paisible du gîte et en faire usage conformément à la destination des lieux.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 12 - Capacité :</span><br/><br/>
            le présent contrat est établi pour une capacité maximum de 6 personnes pour les appartements « Côté Source », 7 pour « Châteaunette », 4 pour « Noisetiers », « Figuiers », « Citronniers » et 2 pour « Maisonnette » personnes. Si le nombre de clients dépasse la capacité d'accueil, le propriétaire est en mesure de refuser les personnes supplémentaires.<br/>
            Toute modification ou rupture de contrat sera considérée à l'initiative du client.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 13 - Animaux :</span><br/><br/>
            Le présent contrat précise si le client peut ou non séjourner en compagnie d'un animal domestique.<br/>
            En cas de non respect de cette clause par le client, le propriétaire peut refuser l'accès des lieux aux animaux. Dans ce cas, toute modification ou rupture du contrat sera considérée à l'initiative du client.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 14 - Assurances :</span><br/><br/>
            le client est responsable de tous les dommages survenant de son fait. Il est invité à souscrire un contrat d'assurance type villégiature pour ces différents risques.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 15 - Paiement des charges :</span><br/><br/>
            en fin de séjour, le client doit acquitter auprès du propriétaire, les charges non incluses dans le prix du séjour. Leur montant s'établit sur la base de calcul mentionnée sur le contrat, et un justificatif est remis par le propriétaire.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 16 - Litiges :</span><br/><br/>
            toute réclamation relative à l'état des lieux doit être soumise au propriétaire dans les trois jours suivant la date du début du séjour. Toute autre réclamation doit lui être adressée dans les meilleurs délais, par lettre.<br/><br/>
            
            <span className="text-xl font-bold underline">Article 17 :</span><br/><br/>
            Conformément à la loi du 6 janvier 1978, vous bénéficiez d'un droit d'accès et de rectification aux données vous concernant. Le propriétaire s'engage à ne pas transmettre les informations que vous lui avez communiquées à d'autres sociétés ou organismes.<br/><br/>
            
            <span className="text-xl font-bold underline">La piscine :</span><br/><br/>
            Ouverte de mi-Mai à Septembre (selon la météo). Il appartient au client de prendre toutes les précautions nécessaires pour l'utilisation de la piscine, en particulier s'il séjourne avec de jeunes enfants, dont il doit assurer la surveillance. L'espace piscine est sécurisé mais non surveillé. Il est interdit de manger, boire et fumer dans cet espace.<br/><br/>
          </p>
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
