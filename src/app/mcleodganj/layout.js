
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj'
     },
    title: 'Alivaa Hotel, McLeodganj | Hotel',
    keywords : "",
    description:"Discover Alivaa Hotel, McLeodganj. Explore our thoughtfully designed hotel spaces built for comfort, style, and memorable stays.", 
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