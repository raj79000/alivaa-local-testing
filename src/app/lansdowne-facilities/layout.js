
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-facilities'
     },
    title: 'Our Offerings | Alivaa Lansdowne Facilities',
    keywords : "",
    description:"Explore the amenities and services at Alivaa Lansdowne that make your stay easy, relaxed, and comfortable from arrival to departure.", 
  }
  
  export default function LansdowneFacilitiesLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }