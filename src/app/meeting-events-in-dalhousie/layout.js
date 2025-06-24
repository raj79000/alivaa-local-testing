
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/meeting-events-in-dalhousie'
     },
    title: 'Event Venues & Meeting Spaces in Dalhousie - The Hoften Blue',
    keywords : "",
    description:"Host your meetings, conferences, and social events in Dalhousie at The Hoften Blue Magnets. Fully-equipped venues with professional service.", 
  }
  
  export default function dalhousiemeetingLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }