
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-dining'
     },
    title: 'Alivaa Hotel, McLeodganj | Restaurants',
    keywords : "",
    description:"Enjoy curated culinary experiences at Alivaa Hotel, McLeodganj. Discover flavors that bring people together.", 
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