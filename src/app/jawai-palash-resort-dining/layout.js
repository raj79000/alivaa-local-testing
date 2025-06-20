
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/jawai-palash-resort-dining'
     },
    title: 'Dining at Jawai Palash Resort | Local Flavours & Gourmet Delights',
    keywords : "",
    description:"Savour authentic Rajasthani cuisine and gourmet dishes at Jawai Palash Resort. A tasteful experience amidst the wild.", 
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