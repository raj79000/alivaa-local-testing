
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-dining'
     },
    title: 'Hoften Sukh Vasa | Restaurants',
    keywords : "",
    description:"Enjoy curated culinary experiences at Hoften Sukh Vasa in Gurugram. Discover flavors that bring people together.", 
  }
  
  export default function GurudiningLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }