
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-dining'
     },
    title: 'Dining Experience | Flavours at Alivaa Lansdowne',
    keywords : "",
    description:"Enjoy a casual yet curated dining experience at Alivaa Lansdowne. Savour meals that blend taste and simplicity in a warm setting.", 
  }
  
  export default function LansdowneDiningLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }