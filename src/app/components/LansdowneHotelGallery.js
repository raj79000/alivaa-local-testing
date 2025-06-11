"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 23, src: "/lansdowne-img/lansdowne-facade.jpg", caption: "Facade", category: "facade" },
  { id: 1, src: "/lansdowne-img/deluxe-room.jpg", caption: "Room", category: "Rooms" },
  { id: 2, src: "/lansdowne-img/premium-room.jpg", caption: "Room", category: "Rooms" },
  { id: 3, src: "/lansdowne-img/rooftop-cottage.jpg", caption: "Room", category: "Rooms" },
  { id: 4, src: "/lansdowne-img/super-deluxe-room.jpg", caption: "Room", category: "Rooms" },
  { id: 5, src: "/lansdowne-img/events-new-img.png", caption: "Event", category: "Events" },
  // { id: 7, src: "/lansdowne-img/hf-g-7.jpg", caption: "Room", category: "Rooms" },
  { id: 8, src: "/lansdowne-img/f-indoor-activities.jpg", caption: "Facility", category: "Facilities" },
  { id: 9, src: "/lansdowne-img/f-swimming-pool-image.jpg", caption: "Facility", category: "Facilities" },

]

function LansdowneHotelGallery() {
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

export default LansdowneHotelGallery

