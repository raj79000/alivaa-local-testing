
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-rooms-suites'
     },
    title: 'Rooms & Suites at Jawai Palash Resort | Stay in Style',
    keywords : "",
    description:"Explore elegant rooms and luxury villas at Jawai Palash Resort, where comfort meets wilderness. Book your serene escape today.", 
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