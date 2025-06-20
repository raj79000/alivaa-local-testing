
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-attractions'
     },
    title: 'Jawai Attractions Near Jawai Palash Resort | Leopards & Culture',
    keywords : "",
    description:"Explore nearby attractions like leopard safari, Jawai Dam, temples, and tribal life around Jawai Palash Resort.", 
  }
  
  export default function JawaiattractionLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }