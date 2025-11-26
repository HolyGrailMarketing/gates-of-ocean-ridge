'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Home, Maximize, Users, X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { semanticColors } from '../styles/colors'

const unitTypes = [
  {
    block: "A",
    units: [
      {
        count: 24,
        bedrooms: 2,
        sqft: 1362,
        description: "Spacious two-bedroom apartments with modern finishes",
        floorPlan: "/images/two-bedroom/TWO-BEDROOM-FLOOR-PLAN-(BLOCK-A).png",
        image: "/images/interiors/two-bedroom-living.jpg",
        gallery: [
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Living.jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Bedroom.jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Bedroom-(2).jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-B---Two-Bedroom---Bathroom.jpg"
        ]
      }
    ]
  },
  {
    block: "B, C, D",
    units: [
      {
        count: 54,
        bedrooms: 1,
        sqft: 960,
        description: "Elegant one-bedroom units perfect for modern living",
        floorPlan: "/images/one-bedroom/ONE-BEDROOM-FLOOR-PLAN-(BLOCKS-B,C,D).png",
        image: "/images/interiors/one-bedroom-living.jpg",
        gallery: [
          "/images/one-bedroom/Mosaic---Ocean-Ridge---Building-A---One-Bedroom---Living-Room.jpg",
          "/images/one-bedroom/Mosaic---Ocean-Ridge---Building-A---One-Bedroom---Bedroom.jpg",
          "/images/one-bedroom/Mosaic---Ocean-Ridge---Building-A---One-Bedroom---Bathroom.jpg",
          "/images/one-bedroom/Mosaic---Ocean-Ridge---Building-A---One-Bedroom---Bathroom-2.jpg"
        ]
      },
      {
        count: 18,
        bedrooms: 2,
        sqft: 1444,
        description: "Generous two-bedroom layouts with premium amenities",
        floorPlan: "/images/two-bedroom/TWO-BEDROOM-FLOOR-PLAN-(BLOCKS-B,C,D).png",
        image: "/images/interiors/two-bedroom-bedroom.jpg",
        gallery: [
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Living.jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Bedroom.jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-A---Two-Bedroom---Bedroom-(2).jpg",
          "/images/two-bedroom/Mosaic---Ocean-Ridge---Building-B---Two-Bedroom---Bathroom.jpg"
        ]
      },
      {
        count: 18,
        bedrooms: 3,
        sqft: 2087,
        description: "Luxurious three-bedroom residences with panoramic views",
        floorPlan: "/images/three-bedroom/THREE-BEDROOM-FLOOR-PLAN-(BLOCKS-B,C,D).png",
        image: "/images/interiors/three-bedroom-living.jpg",
        gallery: [
          "/images/three-bedroom/Mosaic---Ocean-Ridge---Building-A---Three-Bedroom---Living-Room.jpg",
          "/images/three-bedroom/Mosaic---Ocean-Ridge---Building-A---Three-Bedroom---Bedroom.jpg",
          "/images/three-bedroom/Mosaic---Ocean-Ridge---Building-A---Three-Bedroom---Bedroom-2.jpg",
          "/images/three-bedroom/Mosaic---Ocean-Ridge---Building-A---Three-Bedroom----Bathroom.jpg"
        ]
      }
    ]
  }
]

export default function Units() {
  const [selectedUnit, setSelectedUnit] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'floorplan' | 'gallery'>('floorplan')
  
  const totalUnits = unitTypes.reduce((acc, block) => 
    acc + block.units.reduce((blockAcc, unit) => blockAcc + unit.count, 0), 0
  )

  const openUnitModal = (unit: any) => {
    setSelectedUnit(unit)
    setCurrentImageIndex(0)
    setViewMode('floorplan')
  }

  const closeModal = () => {
    setSelectedUnit(null)
  }

  const nextImage = () => {
    if (selectedUnit) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedUnit.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedUnit) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedUnit.gallery.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="units" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apartment Collection
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            {totalUnits} thoughtfully designed residences across four modern buildings, 
            each featuring in-unit laundry and powder room facilities.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Home className="mr-3" size={24} />
            Total: {totalUnits} Premium Units
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          {unitTypes.map((block, blockIndex) => (
            <motion.div
              key={block.block}
              initial={{ opacity: 0, x: blockIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: blockIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Block {block.block}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.units.map((unit, unitIndex) => (
                  <motion.div
                    key={`${block.block}-${unitIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: unitIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openUnitModal(unit)}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    {/* Unit Image Preview */}
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={unit.image}
                        alt={`${unit.bedrooms} bedroom unit interior`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {unit.count} units
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="text-blue-600" size={18} />
                        <span className="font-semibold text-gray-900 text-sm">
                          {unit.bedrooms} Bedroom{unit.bedrooms > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Maximize className="text-gray-600" size={16} />
                      <span className="text-base font-semibold text-gray-900">
                        {unit.sqft.toLocaleString()} sq.ft
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors mb-3">
                      {unit.description}
                    </p>
                    
                    <div className="text-xs text-blue-600 space-y-1 mb-3">
                      <div>• In-unit laundry room</div>
                      <div>• Private powder room</div>
                    </div>
                    
                    <div className="flex items-center justify-center bg-blue-600 text-white text-xs py-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                      <LayoutGrid size={14} className="mr-2" />
                      View Floor Plan & Photos
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Every Unit Includes Premium Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>In-unit laundry facilities</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Private powder room</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Modern finishes throughout</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Energy-efficient design</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Unit Details Modal */}
      <AnimatePresence>
        {selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedUnit.bedrooms} Bedroom Apartment
                  </h3>
                  <p className="text-gray-600">
                    {selectedUnit.sqft.toLocaleString()} sq.ft • {selectedUnit.count} units available
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setViewMode('floorplan')}
                  className={`flex-1 py-3 px-6 text-sm font-medium transition-colors ${
                    viewMode === 'floorplan'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <LayoutGrid size={16} className="inline mr-2" />
                  Floor Plan
                </button>
                <button
                  onClick={() => setViewMode('gallery')}
                  className={`flex-1 py-3 px-6 text-sm font-medium transition-colors ${
                    viewMode === 'gallery'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Home size={16} className="inline mr-2" />
                  Interior Photos
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {viewMode === 'floorplan' ? (
                  <div className="text-center">
                    <div className="relative w-full max-w-2xl mx-auto">
                      <Image
                        src={selectedUnit.floorPlan}
                        alt={`Floor plan for ${selectedUnit.bedrooms} bedroom unit`}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <p className="mt-4 text-gray-600">
                      {selectedUnit.description}
                    </p>
                  </div>
                ) : (
                  <div>
                    {/* Image Gallery */}
                    <div className="relative">
                      <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={selectedUnit.gallery[currentImageIndex]}
                          alt={`Interior view ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 80vw"
                        />
                        
                        {/* Navigation Arrows */}
                        {selectedUnit.gallery.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                              aria-label="Next image"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {selectedUnit.gallery.length}
                        </div>
                      </div>
                      
                      {/* Thumbnail Gallery */}
                      <div className="grid grid-cols-4 gap-2">
                        {selectedUnit.gallery.map((image: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative h-16 rounded overflow-hidden border-2 transition-colors ${
                              index === currentImageIndex ? 'border-blue-600' : 'border-transparent'
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-gray-600">
                        {selectedUnit.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Unit Features */}
                <div className="mt-8 grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Users className="mx-auto text-blue-600 mb-2" size={24} />
                    <p className="font-semibold">{selectedUnit.bedrooms} Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="mx-auto text-blue-600 mb-2" size={24} />
                    <p className="font-semibold">{selectedUnit.sqft.toLocaleString()} sq.ft</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}