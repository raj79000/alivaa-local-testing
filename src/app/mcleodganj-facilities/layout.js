
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-facilities'
     },
    title: 'Alivaa Hotel, McLeodganj | Facilities',
    keywords : "",
    description:"Discover premium facilities at Alivaa Hotel, McLeodganj – unwind in our rooftop swimming pool with scenic views and rejuvenate in our luxurious steam & sauna. Experience comfort and relaxation in the hills.", 
  }
  
  export default function GurumeetingeventsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }