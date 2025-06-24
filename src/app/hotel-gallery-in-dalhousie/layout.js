
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/hotel-gallery-in-dalhousie'
     },
    title: 'Dalhousie Hotel Photo Gallery - The Hoften Blue Magnets',
    keywords : "",
    description:"Browse our hotel gallery and explore photos of rooms, views, and amenities at The Hoften Blue Magnets in Dalhousie.", 
  }
  
  export default function dalhousieGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }