import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "./components/bootstrap";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'font-awesome/css/font-awesome.min.css';
import "../app/styles/globals.css";
import "../app/styles/sideheader.css";

import Footer from "./components/Footer";
import Head from "next/head"; // ✅ Correct import for Next.js Head component
import 'animate.css';

import "../app/styles/main.css";
import "../app/styles/header.css";
import { FormProvider } from "./booking-engine-widget/FormContext";

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Alivaa Hotels | Official Website – A Chain of Business & Leisure Hotels in India',
  description: "Book directly on the official Alivaa Hotels website for the best rates, exclusive offers, and seamless reservations at our chain of premium business and leisure hotels across India.",
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head> 

     
            {/* <Script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9FC894C');</Script> */}


        <title>Hotel Booking Website in Gurgaon | Hotel in Delhi, NCR - Alivaa Hotels</title>
        <meta name="description" content="Book your stay in Gurgaon at Alivaa Hotels, offering top-rated hotels in Delhi and NCR. Enjoy comfortable accommodations, exceptional service, and convenient locations for business or leisure travel. Reserve your room today!" />
        
        {/* ✅ Fix favicon loading */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* ✅ Load Google Fonts properly */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Mr+De+Haviland&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Inspiration&family=Mr+De+Haviland&display=swap" />
      </Head>

      <body>
      
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9FC894C"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <AddBootstrap />
        <FormProvider>
        <main>{children}</main>
        </FormProvider>
      <Footer/>
      </body>
    </html>
  );
}
