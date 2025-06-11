
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-accommodation'
     },
    title: 'Alivaa Hotel, McLeodganj | Accommodation',
    keywords : "",
    description:"Stay at Alivaa Hotel, McLeodganj and experience elegant accommodation . Every room reflects our brand’s commitment to comfort and excellence.", 
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