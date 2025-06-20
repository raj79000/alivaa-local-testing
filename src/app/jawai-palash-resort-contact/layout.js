
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-contact'
     },
    title: 'Contact Us Jawai Palash Resort | Location & Booking Info',
    keywords : "",
    description:"Get in touch with Jawai Palash Resort for bookings, directions, and queries. Call, email, or visit us in the heart of Jawai.", 
  }
  
  export default function JawaiContactLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }