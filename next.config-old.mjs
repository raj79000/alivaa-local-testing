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
]
}
	  
};

export default nextConfig;
