
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-dining.php'
     },
    title: 'Restaurants in Gurgaon - Alivaa Hotels',
    keywords : "",
    description:"Discover top restaurant options at Alivaa Hotel Gurgaon. Enjoy a variety of gourmet cuisines, exceptional service, and a welcoming ambiance for a memorable dining experience.", 
  }
  
  export default function GurgaondiningLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }