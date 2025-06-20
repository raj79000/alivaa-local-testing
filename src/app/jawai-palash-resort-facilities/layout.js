
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-facilities'
     },
    title: 'Facilities at Jawai Palash Resort | Jungle Safaris, Pool & More',
    keywords : "",
    description:"Enjoy top-class facilities at Jawai Palash Resort, including wildlife safaris, swimming pool, nature walks, and personalized hospitality.", 
  }
  
  export default function JawaiFacilitiesLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }