
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-hotel-contact'
     },
    title: 'Hoften Sukh Vasa | Hotel Contact',
    keywords : "",
    description:"Get in touch with Hoften Sukh Vasa in Gurugram. We’re here to assist you with bookings, queries, and more.", 
  }
  
  export default function GuruhotelcontactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }