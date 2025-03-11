import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog Gîtes Saint-Montan | Actualités et Conseils Ardèche",
  description: "Découvrez nos conseils d'experts pour votre séjour à Saint-Montan. Guides locaux, bons plans et actualités sur les Gorges de l'Ardèche par une famille ardéchoise.",
  keywords: ["gîte Saint-Montan", "location Ardèche", "blog Ardèche", "guide Saint-Montan", "conseils vacances Ardèche"],
  openGraph: {
    title: "Blog Gîtes Saint-Montan | Actualités et Conseils Ardèche",
    description: "Conseils d'experts pour votre séjour à Saint-Montan par une famille ardéchoise. Guides locaux et bons plans Ardèche.",
    images: ['/images/presentation/gorges.jpg'],
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog du Mas d'Eylieux",
          "description": "Conseils et actualités sur Saint-Montan et l'Ardèche",
          "publisher": {
            "@type": "Organization",
            "name": "Mas d'Eylieux",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.lemasdeylieux.fr/images/logo/logo.avif"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Route des Gorges",
            "addressLocality": "Saint-Montan",
            "postalCode": "07220",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.440969",
            "longitude": "4.621512"
          }
        })}
      </script>
    </div>
  );
}