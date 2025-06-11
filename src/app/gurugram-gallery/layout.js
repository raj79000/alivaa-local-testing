
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurugram-gallery'
     },
    title: 'Gurugram Hotel Gallery',
    keywords : "",
    description:"Gurugram Hotel Gallery", 
  }
  
  export default function GurugramhotelGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }