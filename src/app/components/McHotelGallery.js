"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 23, src: "/mcleodganj-img/am-facade-img.png", caption: "Facade", category: "facade" },
  { id: 1, src: "/mcleodganj-img/am-g-1.jpg", caption: "Dining", category: "dining" },
  { id: 2, src: "/mcleodganj-img/am-g-2.jpg", caption: "common area", category: "Common Area" },
  { id: 3, src: "/mcleodganj-img/am-g-3.jpg", caption: "Dining", category: "dining" },
  { id: 4, src: "/mcleodganj-img/am-g-4.jpg", caption: "Facilities", category: "facilities" },
  { id: 5, src: "/mcleodganj-img/am-g-5.jpg", caption: "common area", category: "Common Area" },
  { id: 6, src: "/mcleodganj-img/am-g-6.jpg", caption: "common area", category: "Common Area" },
  { id: 7, src: "/mcleodganj-img/am-g-7.jpg", caption: "Room", category: "Rooms" },
  { id: 8, src: "/mcleodganj-img/am-g-8.jpg", caption: "Room", category: "Rooms" },
  { id: 9, src: "/mcleodganj-img/am-g-9.jpg", caption: "Room", category: "Rooms" },
  { id: 10, src: "/mcleodganj-img/am-g-10.jpg", caption: "Room", category: "Rooms" },
  { id: 12, src: "/mcleodganj-img/am-g-12.jpg", caption: "Room", category: "Rooms" },
  { id: 13, src: "/mcleodganj-img/am-g-13.jpg", caption: "Room", category: "Rooms" },
  { id: 14, src: "/mcleodganj-img/am-g-14.jpg", caption: "Room", category: "Rooms" },
  { id: 15, src: "/mcleodganj-img/am-g-15.jpg", caption: "Room", category: "Rooms" },
  { id: 16, src: "/mcleodganj-img/am-g-16.jpg", caption: "common area", category: "Common Area" },
]

function McHotelGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Add "all" as the first category
  const categories = ["all", ...new Set(images.map(img => img.category))]

  return (
    <div className="container-md mt-4 mb-5">
      {/* Filter Buttons */}
      <ul className="nav nav-tabs mb-3 d-flex flex-row gap-2">
        {categories.map(category => (
          <li key={category} className="nav-item">
            <button
              className={`nav-link ${activeCategory === category ? "bgalivablue text-white" : "bg-light text-dark"}`}
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
              <div key={id} className="col-lg-4 col-md-4 col-sm-4 col-6 mb-3">
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

export default McHotelGallery

