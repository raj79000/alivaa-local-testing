
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/gurgaon-gallery'
     },
    title: 'Gurgaon Hotel Gallery',
    keywords : "",
    description:"Gurgaon Hotel Gallery", 
  }
  
  export default function GurgaonhotelGalleryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }