
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-overview'
     },
    title: 'Jawai Palash Resort – Luxury Jungle Stay in Jawai | Alivaa Hotels',
    keywords : "",
    description:"Discover Jawai Palash Resort, a luxury retreat nestled in the wild beauty of Jawai. Experience nature, comfort, and heritage with Alivaa Hotels.", 
  }
  
  export default function JawaioverviewLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }