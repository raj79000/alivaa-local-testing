
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-hotels'
     },
    title: 'Hotels in Gurgaon  on  Sohna Road | 5 Star | Alivaa Hotels Gurugram',
    keywords : "",
    description:"Looking for 5-star hotels in Gurgoan (Gurugram)? Alivaa Hotels on Sohna Road offers modern rooms, and unmatched service.", 
  }
  
  export default function GurgaonoverviewLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }