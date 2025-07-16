
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-dining'
     },
    title: 'Restaurants in Jawai | Dining at Jawai Palash Resort | Alivaa Hotels',
    keywords : "",
    description:"Discover the best restaurants in Jawai at Jawai Palash Resort by Alivaa Hotels. Enjoy delicious local and multi-cuisine dining in a serene setting. Dine with us for a memorable culinary experience!", 
  }

  export default function JawaiPalashDiningLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }