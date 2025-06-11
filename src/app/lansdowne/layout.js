
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne'
     },
    title: 'Alivaa Lansdowne | A Serene Stay Awaits in the Hills',
    keywords : "",
    description:"Discover an inviting blend of comfort and calm at Alivaa Lansdowne. A peaceful escape designed for those who seek simplicity, style, and tranquility.", 
  }
  
  export default function LansdowneoverviewLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }