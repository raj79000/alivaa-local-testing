
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-accommodation'
     },
    title: 'Stay With Us | Alivaa Lansdowne Rooms & Comfort',
    keywords : "",
    description:"Step into thoughtfully designed spaces at Alivaa Lansdowne. Choose from a variety of rooms that promise comfort and a restful experience.", 
  }
  
  export default function LansdowneAccommodationLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }