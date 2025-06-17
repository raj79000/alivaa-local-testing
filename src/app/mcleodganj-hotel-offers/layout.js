
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/mcleodganj-hotel-offers'
     },
    title: 'Day Use Rooms in McLeodganj | Offers & Deals | Alivaa Hotels',
    keywords : "",
    description:"Book convenient day-use rooms in McLeodganj at Alivaa Hotels. Enjoy flexible stays, exclusive offers, and great deals for business or leisure. Perfect for short stays & workcations. Book now!", 
  }

  export default function McLeodGanjHotelOffersLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }