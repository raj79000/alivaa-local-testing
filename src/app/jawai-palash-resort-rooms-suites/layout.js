
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-rooms-suites'
     },
    title: 'Rooms & Suites Stay in Jawai Palash Resort - Alivaa Hotels',
    keywords : "",
    description:"Experience luxury and comfort with Rooms & Suites stay at Jawai Palash Resort by Alivaa Hotels. Enjoy scenic views, modern amenities, and a peaceful retreat in Jawai. Book your stay today!", 
  }

  export default function JawaiAccommodationLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }