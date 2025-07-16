
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-facilities'
     },
    title: 'Facilities at Jawai Palash Resort | Jungle Safaris, Pool & More - Alivaa Hotels',
    keywords : "",
    description:"Explore top facilities at Jawai Palash Resort by Alivaa Hotels, including thrilling jungle safaris, a refreshing swimming pool, nature walks, and more. Enjoy a perfect blend of adventure and relaxation!", 
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