
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-gallery'
     },
    title: 'Explore Our Image Gallery & Videos - Alivaa Jawai Palash Resort',
    keywords : "",
    description:"Explore our image gallery and videos of Alivaa Jawai Palash Resort. Discover scenic views, luxurious rooms, dining experiences, and unforgettable moments before you book your stay.", 
  }

  export default function JawaiPalashResortGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }