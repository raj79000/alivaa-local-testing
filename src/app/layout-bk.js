// app/layout.js
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/styles/globals.css";
import "../app/styles/main.css";
import "../app/styles/header.css";
import "../app/styles/sideheader.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';

import Footer from "./components/Footer";
import AddBootstrap from "./components/bootstrap";
import { FormProvider } from "./booking-engine-widget/FormContext";
import { Mr_De_Haviland, Grey_Qo } from 'next/font/google';

const mrDeHaviland = Mr_De_Haviland({ subsets: ['latin'], weight: ['400'] });
const greyQo = Grey_Qo({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: { canonical: '/' },
  title: 'Alivaa Hotels | Official Website – A Chain of Business & Leisure Hotels in India',
  description: "Book directly on the official Alivaa Hotels website for the best rates, exclusive offers, and seamless reservations at our chain of premium business and leisure hotels across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mrDeHaviland.className} ${greyQo.className}`}>
      <head>
     
        <Script id="gtm-init" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        }
        )
        (window,document,'script','dataLayer','GTM-W9FC894C');
        `}
        </Script>

      </head>
      <body>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9FC894C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <AddBootstrap />
        <FormProvider>
          <main>{children}</main>
        </FormProvider>
        <Footer />
      </body>
    </html>
  );
}
