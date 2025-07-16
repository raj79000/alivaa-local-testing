
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-overview'
     },
    title: 'Luxury Villa & Resort in Jawai - Alivaa Hotels',
    keywords : "",
    description:"Book your stay at Alivaa, a luxurious resort in Jawai. Experience exceptional hospitality, stunning landscapes, and a peaceful retreat. Book now!", 
  }
  
  export default function JawaioverviewLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }