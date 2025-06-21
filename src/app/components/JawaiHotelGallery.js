"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 1, src: "/jawai-img/ng-1.jpg", caption: "Rooms", category: "Room" },
  { id: 2, src: "/jawai-img/ng-2.jpg", caption: "Room", category: "Room" },
  { id: 3, src: "/jawai-img/ng-3.jpg", caption: "Resort", category: "Resort" },
  { id: 4, src: "/jawai-img/ng-4.jpg", caption: "Facility", category: "Facilities" },
  { id: 5, src: "/jawai-img/ng-5.jpg", caption: "Dining", category: "Dining" },
  { id: 6, src: "/jawai-img/ng-6.jpg", caption: "Resort", category: "Resort" },
  { id: 7, src: "/jawai-img/ng-7.jpg", caption: "Facility", category: "Facilities" },
  { id: 8, src: "/jawai-img/ng-8.jpg", caption: "Facility", category: "Facilities" },
  { id: 9, src: "/jawai-img/ng-9.jpg", caption: "Facility", category: "Facilities" },
  { id: 10, src: "/jawai-img/ng-10.jpg", caption: "Dining", category: "Dining" },
  { id: 11, src: "/jawai-img/ng-11.jpg", caption: "Rooms", category: "Room" },
  { id: 12, src: "/jawai-img/ng-12.jpg", caption: "Rooms", category: "Room" },
  { id: 13, src: "/jawai-img/ng-13.jpg", caption: "Rooms", category: "Room" },
  { id: 14, src: "/jawai-img/ng-14.jpg", caption: "Dining", category: "Dining" },
  { id: 15, src: "/jawai-img/ng-15.jpg", caption: "Resort", category: "Resort" },
  { id: 16, src: "/jawai-img/ng-16.jpg", caption: "Dining", category: "Dining" },
  { id: 17, src: "/jawai-img/ng-17.jpg", caption: "Rooms", category: "Room" },
  { id: 18, src: "/jawai-img/ng-18.jpg", caption: "Rooms", category: "Room" },
  { id: 19, src: "/jawai-img/ng-19.jpg", caption: "Resort", category: "Resort" },
  { id: 20, src: "/jawai-img/ng-20.jpg", caption: "Resort", category: "Resort" },
  { id: 21, src: "/jawai-img/ng-21.png", caption: "Rooms", category: "Room" },
  { id: 22, src: "/jawai-img/ng-22.png", caption: "Rooms", category: "Room" },
  { id: 23, src: "/jawai-img/ng-23.png", caption: "Rooms", category: "Room" },
  { id: 24, src: "/jawai-img/ng-24.png", caption: "Rooms", category: "Room" },
  { id: 25, src: "/jawai-img/ng-25.png", caption: "Rooms", category: "Room" },
  { id: 26, src: "/jawai-img/ng-26.png", caption: "Rooms", category: "Room" },
  { id: 27, src: "/jawai-img/ng-27.png", caption: "Rooms", category: "Room" },
  { id: 28, src: "/jawai-img/ng-28.png", caption: "Rooms", category: "Room" },
  { id: 29, src: "/jawai-img/ng-29.png", caption: "Rooms", category: "Room" },
  { id: 30, src: "/jawai-img/ng-30.png", caption: "Experience", category: "Experience" },
  { id: 31, src: "/jawai-img/ng-31.png", caption: "Facilities", category: "Facilities" },
  // { id: 32, src: "/jawai-img/ng-32.png", caption: "Resort", category: "Resort" },
  { id: 33, src: "/jawai-img/ng-33.png", caption: "Resort", category: "Resort" },
  { id: 34, src: "/jawai-img/ng-34.png", caption: "Rooms", category: "Room" },
  { id: 35, src: "/jawai-img/ng-35.png", caption: "Rooms", category: "Room" },
  { id: 36, src: "/jawai-img/ng-36.png", caption: "Rooms", category: "Room" },
  { id: 37, src: "/jawai-img/ng-37.png", caption: "Dining", category: "Dining" },
  { id: 38, src: "/jawai-img/ng-38.png", caption: "Dining", category: "Dining" },
  { id: 39, src: "/jawai-img/ng-39.png", caption: "Rooms", category: "Room" },
  { id: 40, src: "/jawai-img/ng-40.png", caption: "Rooms", category: "Room" },
  { id: 41, src: "/jawai-img/ng-41.png", caption: "Dining", category: "Dining" },
  { id: 42, src: "/jawai-img/eng-1.png", caption: "Experience", category: "Experience" },
  { id: 43, src: "/jawai-img/eng-2.png", caption: "Experience", category: "Experience" },
  { id: 44, src: "/jawai-img/eng-3.png", caption: "Experience", category: "Experience" },
  { id: 45, src: "/jawai-img/eng-4.png", caption: "Experience", category: "Experience" },
  { id: 46, src: "/jawai-img/eng-5.png", caption: "Experience", category: "Experience" },

]



function JawaiHotelGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Add "all" as the first category
  const categories = ["all", ...new Set(images.map(img => img.category))]

  return (
    <div className="container-md mt-4 mb-5 lansdowne-hotel-gallery-page mt-5">
      <div className="center text-center">
        <h1 className="global-heading-gurgaon inner-hd">Jawai Palash Resort Gallery</h1>
      </div>
      {/* Filter Buttons */}
      <ul className="nav nav-tabs mb-3 d-flex flex-row gap-2">
        {categories.map(category => (
          <li key={category} className="nav-item">
            <button
              className={`nav-link ${activeCategory === category ? "bg-dark text-white" : "bg-light text-dark"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Gallery */}
      <Gallery withCaption>
        <div className="row">
          {images
            .filter(img => activeCategory === "all" || img.category === activeCategory)
            .map(({ id, src, caption, category }) => (
              <div key={id} className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
                <Item
                  original={src}
                  thumbnail={src}
                  caption={caption}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      src={src}
                      className="img-fluid"
                      width={600}
                      height={400}
                      alt={caption || category}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  )}
                </Item>
              </div>
            ))}
        </div>
      </Gallery>
    </div>
  )
}

export default JawaiHotelGallery

