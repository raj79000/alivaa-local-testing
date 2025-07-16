
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-contact'
     },
    title: 'Jawai Resorts Contact Number - Alivaa Jawai Palash Resort | Location & Address',
    keywords : "",
    description:"Looking for Jawai resorts contact number? Reach Alivaa Jawai Palash Resort easily. Find our location, address, and phone number to plan your perfect stay in the heart of Jawai.", 
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