
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/restaurants-in-dalhousie'
     },
    title: 'Restaurants in Dalhousie - Dine at The Hoften Blue Magnets',
    keywords : "",
    description:"Savor delicious multi-cuisine dishes at one of the top restaurants in Dalhousie – located inside The Hoften Blue Magnets hotel.", 
  }

  export default function DalhousieDiningLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }