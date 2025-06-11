
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-contact'
     },
    title: 'Alivaa Hotel, McLeodganj | Hotel Contact',
    keywords : "",
    description:"Get in touch with Alivaa Hotel, McLeodganj. We’re here to assist you with bookings, queries, and more.", 
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