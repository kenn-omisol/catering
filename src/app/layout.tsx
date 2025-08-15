import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gourmet Catering Co. | Premium Event Catering Services",
  description: "Award-winning catering services for weddings, corporate events, and special occasions. Custom menus, professional service, and unforgettable culinary experiences. Serving your city since 2008.",
  keywords: "catering, wedding catering, corporate catering, event catering, party catering, gourmet food, private chef, event planning",
  authors: [{ name: "Gourmet Catering Co." }],
  creator: "Gourmet Catering Co.",
  publisher: "Gourmet Catering Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gourmetcateringco.com',
    siteName: 'Gourmet Catering Co.',
    title: 'Gourmet Catering Co. | Premium Event Catering Services',
    description: 'Award-winning catering services for weddings, corporate events, and special occasions. Custom menus, professional service, and unforgettable culinary experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gourmet Catering Co. - Premium Event Catering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gourmetcateringco',
    creator: '@gourmetcateringco',
    title: 'Gourmet Catering Co. | Premium Event Catering Services',
    description: 'Award-winning catering services for weddings, corporate events, and special occasions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://gourmetcateringco.com',
  },
  other: {
    'geo.region': 'US',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://gourmetcateringco.com',
  name: 'Gourmet Catering Co.',
  description: 'Award-winning catering services for weddings, corporate events, and special occasions.',
  url: 'https://gourmetcateringco.com',
  telephone: '+1-555-123-4567',
  email: 'hello@gourmetcateringco.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Culinary Way',
    addressLocality: 'Downtown',
    addressRegion: 'NY',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7128,
    longitude: -74.0060,
  },
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-18:00',
    'Su 10:00-16:00',
  ],
  servesCuisine: ['American', 'Italian', 'Mediterranean', 'Asian Fusion', 'Contemporary'],
  priceRange: '$$-$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Catering',
          description: 'Complete wedding catering services with custom menus and professional service.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Catering',
          description: 'Professional catering for business meetings, conferences, and corporate events.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Party Catering',
          description: 'Custom catering solutions for private parties and special celebrations.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/gourmetcateringco',
    'https://www.instagram.com/gourmetcateringco',
    'https://www.twitter.com/gourmetcateringco',
    'https://www.linkedin.com/company/gourmetcateringco',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4A7C59" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}