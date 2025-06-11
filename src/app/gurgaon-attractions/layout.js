
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-attractions.php'
     },
    title: 'Best Attractions In Gurgaon - Alivaa Hotels',
    keywords : "",
    description:"Explore top attractions in Gurgaon with Alivaa Hotels. Discover the city's vibrant landmarks, shopping destinations, entertainment spots, and more, perfect for business and leisure travelers.", 
  }
  
  export default function GurgaonattractionLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }