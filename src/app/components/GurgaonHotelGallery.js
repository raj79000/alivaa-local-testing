"use client"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState } from 'react'
import Image from 'next/image'

// Flat list of all images
const images = [
    
  { id: 23, src: "/images/new-alivaa-facade.webp", caption: "Facade", category: "facade" },
  { id: 1, src: "/images/gallery/Thumb/1.jpg", caption: "Room", category: "Rooms" },
  { id: 2, src: "/images/gallery/Thumb/2.jpg", caption: "Room", category: "Rooms" },
  { id: 3, src: "/images/gallery/Thumb/3.jpg", caption: "Room", category: "Rooms" },
  { id: 4, src: "/images/gallery/Thumb/4.jpg", caption: "Room", category: "Rooms" },
  { id: 5, src: "/images/gallery/Thumb/5.jpg", caption: "Room", category: "Rooms" },
  { id: 6, src: "/images/gallery/Thumb/6.jpg", caption: "Room", category: "Rooms" },
  { id: 7, src: "/images/gallery/Thumb/7.jpg", caption: "Room", category: "Rooms" },
  { id: 8, src: "/images/gallery/Thumb/8.jpg", caption: "Room", category: "Rooms" },
  { id: 9, src: "/images/gallery/Thumb/9.jpg", caption: "Room", category: "Rooms" },
  { id: 10, src: "/images/gallery/Thumb/10.jpg", caption: "Room", category: "Rooms" },
  { id: 11, src: "/images/gallery/Thumb/11.jpg", caption: "Room", category: "Rooms" },
  { id: 12, src: "/images/gallery/Thumb/12.jpg", caption: "Room", category: "Rooms" },
  { id: 13, src: "/images/gallery/Thumb/13.jpg", caption: "Room", category: "Rooms" },
  { id: 14, src: "/images/gallery/Thumb/14.jpg", caption: "Room", category: "Rooms" },
  { id: 15, src: "/images/gallery/Thumb/15.jpg", caption: "Room", category: "Rooms" },
  { id: 16, src: "/images/gallery/Thumb/16.jpg", caption: "Room", category: "Rooms" },
  { id: 17, src: "/images/gallery/Thumb/17.jpg", caption: "Room", category: "Rooms" },
  { id: 18, src: "/images/gallery/Thumb/18.jpg", caption: "Room", category: "Rooms" },
  { id: 19, src: "/images/gallery/Thumb/19.jpg", caption: "Room", category: "Rooms" },
  { id: 20, src: "/images/gallery/Thumb/20.jpg", caption: "Room", category: "Rooms" },
  { id: 21, src: "/images/gallery/Thumb/21.jpg", caption: "Room", category: "Rooms" },
  { id: 22, src: "/images/gallery/Thumb/22.jpg", caption: "Room", category: "Rooms" },  
  { id: 24, src: "/images/gallery/Thumb/alivaa-dining.webp", caption: "Dining", category: "dining" },

]

function GurgaonHotelGallery() {
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
                      width={600}
                      height={400}
                      className="img-fluid"
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

export default GurgaonHotelGallery

