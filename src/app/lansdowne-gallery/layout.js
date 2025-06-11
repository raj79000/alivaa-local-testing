
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-gallery'
     },
    title: 'Photo Gallery | A Glimpse of Alivaa Lansdowne',
    keywords : "",
    description:"Take a visual tour of Alivaa Lansdowne. Browse photos that reflect the peaceful ambience, elegant interiors, and natural surroundings.", 
  }
  
  export default function LansdownehotelGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }