"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 13, src: "/jawai-img/g-facade-1.webp", caption: "Facade", category: "facade" },
  { id: 14, src: "/jawai-img/g-facade-2.webp", caption: "Facade", category: "facade" },
  { id: 15, src: "/jawai-img/g-facade-3.webp", caption: "Facade", category: "facade" },
  { id: 16, src: "/jawai-img/g-facade-4.webp", caption: "Facade", category: "facade" },
  { id: 1, src: "/jawai-img/g-room-0.webp", caption: "Room", category: "Rooms" },
  { id: 2, src: "/jawai-img/g-room-2.webp", caption: "Room", category: "Rooms" },
  { id: 3, src: "/jawai-img/g-room-3.webp", caption: "Room", category: "Rooms" },
  { id: 4, src: "/jawai-img/g-room-4.webp", caption: "Room", category: "Rooms" },
  { id: 5, src: "/jawai-img/g-room-5.webp", caption: "Room", category: "Rooms" },
  { id: 6, src: "/jawai-img/g-room-6.webp", caption: "Room", category: "Rooms" },
  { id: 7, src: "/jawai-img/g-room-7.webp", caption: "Room", category: "Rooms" },
  { id: 8, src: "/jawai-img/g-room-8.webp", caption: "Room", category: "Rooms" },
  { id: 9, src: "/jawai-img/g-room-9.webp", caption: "Room", category: "Rooms" },
  { id: 10, src: "/jawai-img/g-room-10.webp", caption: "Room", category: "Rooms" },
  { id: 11, src: "/jawai-img/g-room-11.webp", caption: "Room", category: "Rooms" },
  { id: 12, src: "/jawai-img/g-room-12.webp", caption: "Room", category: "Rooms" },
  { id: 17, src: "/jawai-img/g-dine-1.webp", caption: "Dining", category: "Dining" },
  { id: 18, src: "/jawai-img/g-dine-2.webp", caption: "Dining", category: "Dining" },
  { id: 19, src: "/jawai-img/g-dine-3.webp", caption: "Dining", category: "Dining" },
  { id: 20, src: "/jawai-img/dine-pvt-dining.png", caption: "Dining", category: "Dining" },
  { id: 21, src: "/jawai-img/dine-unique.png", caption: "Dining", category: "Dining" },

]

function JawaiHotelGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Add "all" as the first category
  const categories = ["all", ...new Set(images.map(img => img.category))]

  return (
    <div className="container-md mt-4 mb-5 lansdowne-hotel-gallery-page mt-5">
      <div className="center text-center">
        <h1 className="global-heading-gurgaon inner-hd">Hotel Gallery</h1>
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

