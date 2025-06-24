
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/hotel-contact-in-dalhousie'
     },
    title: 'Hotels Contact Number in Dalhousie - Reach The Hoften Blue Magnets',
    keywords : "",
    description:"Contact The Hoften Blue Magnets in Dalhousie for bookings, inquiries, and directions. We’re here to help you 24/7.", 
  }
  
  export default function DalhousiecontactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }