import { useEffect } from 'react'

const StructuredData = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SabkaPremium',
      url: 'https://sabkapremium.com',
      logo: 'https://sabkapremium.com/assets/logo.png',
      description: 'Get ChatGPT Plus, Claude Max, Netflix 4K, Canva Pro & 20+ AI tools at lowest prices in India. Instant delivery, trusted by 5000+ users.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://instagram.com/sabkapremium',
        'https://twitter.com/sabkapremium'
      ]
    }

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SabkaPremium',
      url: 'https://sabkapremium.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://sabkapremium.com/?s={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }

    // Product Aggregate Offer Schema
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Premium AI & OTT Services',
      description: 'Affordable premium subscriptions for ChatGPT, Netflix, Canva Pro, and more',
      numberOfItems: 25,
      itemListElement: [
        {
          '@type': 'Product',
          name: 'ChatGPT Plus',
          description: 'ChatGPT Plus subscription with GPT-4 access',
          brand: { '@type': 'Brand', name: 'OpenAI' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '399',
            highPrice: '1999',
            offerCount: '7',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'Product',
          name: 'Claude Max',
          description: 'Claude AI Pro subscription with unlimited access',
          brand: { '@type': 'Brand', name: 'Anthropic' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '499',
            highPrice: '9000',
            offerCount: '5',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'Product',
          name: 'Netflix 4K Premium',
          description: 'Netflix 4K Premium subscription',
          brand: { '@type': 'Brand', name: 'Netflix' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '179',
            highPrice: '1699',
            offerCount: '4',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'Product',
          name: 'Canva Pro',
          description: 'Canva Pro design tool subscription',
          brand: { '@type': 'Brand', name: 'Canva' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '79',
            highPrice: '599',
            offerCount: '4',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'Product',
          name: 'Adobe Creative Cloud',
          description: 'Adobe Creative Cloud All Apps subscription',
          brand: { '@type': 'Brand', name: 'Adobe' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: '2499',
            availability: 'https://schema.org/InStock'
          }
        },
        {
          '@type': 'Product',
          name: 'Notion AI Business',
          description: 'Notion Business Plan with AI features',
          brand: { '@type': 'Brand', name: 'Notion' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: '2999',
            availability: 'https://schema.org/InStock'
          }
        }
      ]
    }

    // Review/Rating Schema
    const reviewSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SabkaPremium Reviews',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '5000',
        bestRating: '5',
        worstRating: '1'
      }
    }

    // FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does delivery take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most orders are delivered instantly or within 1-2 hours. You will receive your account details via email or WhatsApp.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is it safe to buy from SabkaPremium?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, absolutely! We have 5000+ satisfied customers. We provide replacement guarantee and 24/7 customer support.'
          }
        },
        {
          '@type': 'Question',
          name: 'What payment methods do you accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We accept UPI, Google Pay, PhonePe, Paytm, and all major payment methods.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide replacement if account stops working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide free replacement for the entire subscription period if your account faces any issues.'
          }
        }
      ]
    }

    // Combine all schemas
    const allSchemas = [
      organizationSchema,
      websiteSchema,
      productSchema,
      reviewSchema,
      faqSchema
    ]

    // Add to head
    let script = document.querySelector('#structured-data-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'structured-data-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(allSchemas)

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('#structured-data-schema')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}

export default StructuredData
