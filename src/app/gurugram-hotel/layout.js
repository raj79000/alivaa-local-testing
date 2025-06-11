
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-hotel'
     },
    title: 'Hoften Sukh Vasa | Hotel',
    keywords : "",
    description:"Discover Hoften Sukh Vasa in Gurugram. Explore our thoughtfully designed hotel spaces built for comfort, style, and memorable stays.", 
  }
  
  export default function GuruoverviewLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }