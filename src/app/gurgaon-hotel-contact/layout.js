
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-hotel-contact'
     },
    title: 'Hotels near Manesar | Alivaa Hotels – Contact Address & Phone Number',
    keywords : "",
    description:"Contact Alivaa Hotels - Hotels near Manesar. Contact us for booking or customer service assistance, event inquiries and to share your feedback. Contact now!", 
  }
  
  export default function GurgaonhotelcontactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }