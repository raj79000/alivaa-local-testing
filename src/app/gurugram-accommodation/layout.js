
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-accommodation'
     },
    title: 'Hoften Sukh Vasa | Accommodation',
    keywords : "",
    description:"Stay at Hoften Sukh Vasa and experience elegant accommodation . Every room reflects our brand’s commitment to comfort and excellence.", 
  }
  
  export default function GuruaccomodationLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }