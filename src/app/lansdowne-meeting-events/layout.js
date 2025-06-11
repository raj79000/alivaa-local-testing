
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/lansdowne-meeting-events'
     },
    title: 'Title: Meetings & Events | Alivaa Lansdowne',
    keywords : "",
    description:"Host seamless meetings and memorable events at Alivaa Lansdowne. Enjoy elegant spaces, modern amenities, and personalized service for every occasion.", 
  }
  
  export default function LansdowneMeetingEventsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }