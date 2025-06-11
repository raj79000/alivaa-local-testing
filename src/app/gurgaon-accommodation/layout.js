
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-accommodation.php'
     },
    title: 'Hotel Rooms, Stay & Accommodation in Gurgaon | Sohna Road | Alivaa Hotels',
    keywords : "",
    description:"Experience premium stay and accommodation at Alivaa Hotels on Sohna Road, Gurgaon. Our hotel offers luxurious rooms, modern amenities, and exceptional service for a relaxing and memorable stay. Book now!", 
  }
  
  export default function GurgaonaccomodationLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }