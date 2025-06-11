
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-meeting-events'
     },
    title: 'Hoften Sukh Vasa | Meeting & Events',
    keywords : "",
    description:"Host your next event at Hoften Sukh Vasa, Gurugram. Our event spaces are ideal for meetings, gatherings, and memorable celebrations.", 
  }
  
  export default function GurumeetingeventsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }