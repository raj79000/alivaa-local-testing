import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const OurHotelsSlider = () => {
  return (
    <section className="your-break about-us sec-padding">
      <div className="container">
        <h2 className="about-us text-center mt-5">Our Hotels</h2>
        <div className="winter-sec htlslder">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 }
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/new-alivaa-facade.webp" alt="Alivaa Hotel Gurugram" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Gurugram</h3>
                  <p className="winter-box-para card-texttt">
                    We are a luxury, fashion, and lifestyle brand that is not just part of the hotel business...
                  </p>
                  <Link href="/gurgaon-hotels" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/gurgaon-hotels" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/hoften-new-fcd-1.webp" alt="The Hoften" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">The Hoften, Gurugram</h3>
                  <p className="winter-box-para card-texttt">The Hoften is a practical, mid-scale hotel brand created....</p>
                  <Link href="/gurugram-hotel" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/gurugram-hotel" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/mcleodganj-hotel.jpg" alt="Alivaa Mcleodganj" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Mcleodganj</h3>
                  <p className="winter-box-para card-texttt">
                    Alivaa Hotel provides a perfect retreat in the peaceful environment of McLeodganj...
                  </p>
                  <Link href="/mcleodganj" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/mcleodganj" className="box-btn know-more">Explore More</Link>
                    <Link href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-20&checkOutDate=2025-05-20&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}

            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/lansdowne-img/lansdowne-facade.jpg" alt="Alivaa Hotel, Lansdowne" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Lansdowne</h3>
                  <p className="winter-box-para card-texttt">
                    Spend a serene mountain escape at Viceroy in the Himalaya, which...
                  </p>
                  <Link href="/lansdowne" className="read-more-btnnn">Read more</Link>
                  <div className="winter-box-btn">
                    <Link href="/lansdowne" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="winter-box shadow-sm">
                <Image height={200} width={200} src="/images/corebett-new-image.webp" alt="Corbett Jungle Resort" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Jungle Resort, Corbett</h3>
                  <p className="winter-box-para card-texttt">Your perfect pause, hidden in the wild.</p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-4" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
             <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/mumbai-img/alivaa-mumbai-home.jpg" alt="Alivaa Hotel Mumbai" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Mumbai</h3>
                  <p className="winter-box-para card-texttt">A stay as vibrant as the city itself.</p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-4" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 7 */}
             <SwiperSlide>
              <div className="winter-box shadow-sm">
                <img src="/udaipur-img/alivaa-udaipur-home.jpg" alt="Alivaa Hotel Udaipur" className="w-100 primary-radius mt-0" />
                <div className="winter-box-content carddd">
                  <h3 className="winter-box-heading">Alivaa Hotel, Udaipur</h3>
                  <p className="winter-box-para card-texttt">Stay amidst heritage, history, and serene lake views. </p>
                  <div className="winter-box-btn">
                    <Link href="/" className="box-btn book-noww tooltipp mt-4" title="coming soon">
                      Coming soon<span className="tooltiptextt">Coming soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>




          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurHotelsSlider;
