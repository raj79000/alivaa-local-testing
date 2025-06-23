
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/hotels-in-dalhousie'
     },
    title: 'Hotels in Dalhousie - The Hoften Blue Magnets for Stay',
    keywords : "",
    description:"Discover the best hotels in Dalhousie with luxury rooms, stunning views, and warm hospitality. Book your stay at The Hoften Blue Magnets today.", 
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