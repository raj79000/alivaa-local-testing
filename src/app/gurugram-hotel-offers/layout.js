
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-hotel-offers'
     },
    title: 'Hoften Sukh Vasa | Hotel Offers',
    keywords : "",
    description:"Explore the latest offers from Hoften Sukh Vasa in Gurugram. Enjoy exclusive deals designed to make your stay more rewarding.", 
  }
  
  export default function GuruhoteloffersLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }