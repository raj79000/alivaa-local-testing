/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['alivaablog.cinuniverse.com'],
  },

  // images: {
  //       unoptimized: false,
  //     },


    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'homesweb.staah.net',
    //         port: '',
    //         pathname: '/imagelibrary/**',
    //       },
    //     ],
    //     unoptimized: true,
    //   },
//     async headers() {
//   return [
//     {
//       source: '/_next/static/(.*)',
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=31536000, immutable',
//         },
//       ],
//     },
//   ];
// },
	  async redirects() {
return [
	{
        source: '/gurugram-meeting-events.php',
        destination: '/gurugram-meeting-events',
        permanent: true,
      },
      {
        source: '/gurugram-hotel-contact.php',
        destination: '/gurugram-hotel-contact',
        permanent: true,
      },
      {
        source: '/gurugram-hotel-offers.php',
        destination: '/gurugram-hotel-offers',
        permanent: true,
      },
      {
        source: '/gurugram-hotel.php',
        destination: '/gurugram-hotel',
        permanent: true,
      },
      {
        source: '/special-offers.php',
        destination: '/special-offers',
        permanent: true,
      },
      {
        source: '/gurugram-dining.php',
        destination: '/gurugram-dining',
        permanent: true,
      },
      {
        source: '/gurugram-accommodation.php',
        destination: '/gurugram-accommodation',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel-offers.php',
        destination: '/gurgaon-hotel-offers',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel.php',
        destination: '/gurgaon-hotels',
        permanent: true,
      },
      {
        source: '/gurgaon-hotel-contact.php',
        destination: '/gurgaon-hotel-contact',
        permanent: true,
      },
      {
        source: '/gurgaon-facilities.php',
        destination: '/gurgaon-facilities',
        permanent: true,
      },
      {
        source: '/gurgaon-dining.php',
        destination: '/gurgaon-restaurants',
        permanent: true,
      },
      {
        source: '/gurgaon-attractions.php',
        destination: '/gurgaon-tourist-attractions',
        permanent: true,
      },
      {
        source: '/gurgaon-accommodation.php',
        destination: '/gurgaon-rooms',
        permanent: true,
      },
      {
        source: '/contactus.php',
        destination: '/contactus',
        permanent: true,
      },
      {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/gurugram-holi.html',
        destination: '/gurugram-holi',
        permanent: true,
      },
      {
        source: '/blog/concerts-in-gurgaon.html',
        destination: '/concerts-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/nightlife-in-gurgaon.html',
        destination: '/nightlife-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/gurugram-hotel-deal.html',
        destination: '/gurugram-hotel-deal',
        permanent: true,
      },
      {
        source: '/blog/new-year-celebration-gurgaon.html',
        destination: '/new-year-celebration-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/restaurants-near-huda-city-centre.html',
        destination: '/restaurants-near-huda-city-centre',
        permanent: true,
      },
      {
        source: '/blog/best-hotel-deals-in-gurugram.html',
        destination: '/best-hotel-deals-in-gurugram',
        permanent: true,
      },
      {
        source: '/blog/best-restaurants-in-sohna-road.html',
        destination: '/best-restaurants-in-sohna-road',
        permanent: true,
      },
      {
        source: '/blog/valentine-day-getaway-in-delhi.html',
        destination: '/valentine-day-getaway-in-delhi',
        permanent: true,
      },
      {
        source: '/blog/places-to-visit-in-gurgaon.html',
        destination: '/places-to-visit-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/hotels-near-huda-city-centre.html',
        destination: '/hotels-near-huda-city-centre',
        permanent: true,
      },
      {
        source: '/blog/luxury-services-at-alivaa-hotel-gurugram.html',
        destination: '/luxury-services-at-alivaa-hotel-gurugram',
        permanent: true,
      },
      {
        source: '/blog/best-hotels-in-gurgaon-with-a-pool.html',
        destination: '/best-hotels-in-gurgaon-with-a-pool',
        permanent: true,
      },
      {
        source: '/blog/hotel-near-medanta-hospital-gurgaon.html',
        destination: '/hotel-near-medanta-hospital-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/exhibition-in-gurgaon.html',
        destination: '/exhibition-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/things-to-do-in-gurgaon.html',
        destination: '/things-to-do-in-gurgaon',
        permanent: true,
      },
      {
        source: '/blog/best-hotels-near-sector-45.html',
        destination: '/best-hotels-near-sector-45',
        permanent: true,
      },
]
}
	  
};

export default nextConfig;
