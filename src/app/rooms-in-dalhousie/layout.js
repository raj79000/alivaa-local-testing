
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/rooms-in-dalhousie'
     },
    title: 'Hotel Rooms in Dalhousie | Accommodation | The Hoften Blue Magnets Dalhousie Stay',
    keywords : "",
    description:"Explore spacious, elegant, and comfortable rooms in Dalhousie at The Hoften Blue Magnets. Perfect for couples, families, and solo travelers.", 
  }

  export default function DalhousieAccommodationLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }