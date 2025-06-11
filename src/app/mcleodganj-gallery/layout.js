
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-gallery'
     },
    title: 'Alivaa Hotel, McLeodganj | Gallery',
    keywords : "",
    description:"Explore the visual charm of Alivaa Hotel, McLeodganj through our gallery. Browse stunning photos of our rooms, rooftop pool, serene surroundings, and modern amenities.", 
  }
  
  export default function McleodganjhotelGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }