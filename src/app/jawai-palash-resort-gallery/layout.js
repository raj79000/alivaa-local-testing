
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-gallery'
     },
    title: 'Photo Gallery | A Glimpse of Alivaa Jawai Palash Resort',
    keywords : "",
    description:"Take a visual tour of Alivaa Jawai Palash Resort. Browse photos that reflect the peaceful ambience, elegant interiors, and natural surroundings.", 
  }

  export default function JawaiPalashResortGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }