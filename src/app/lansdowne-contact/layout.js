
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-contact'
     },
    title: 'Get in Touch | Alivaa Lansdowne Contact Details',
    keywords : "",
    description:"We're here to help. Reach out to Alivaa Lansdowne for enquiries, bookings, or assistance. Call, email, or find us easily with directions.", 
  }
  
  export default function LansdowneContactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }