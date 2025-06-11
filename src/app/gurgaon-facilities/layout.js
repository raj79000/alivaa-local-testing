
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-facilities'
     },
    title: 'Hotels with Swimming Pool in Gurgaon - Alivaa Hotels - Hotel Facilities & Services',
    keywords : "",
    description:"Alivaa Hotels is one of the best Hotels & Resorts with Swimming Pool in Gurgaon. It also offers FREE breakfast & high speed WiFi 24x7. Book Direct Now!", 
  }
  
  export default function GurgaonfacilitiesLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }