'use client'

import { motion } from 'framer-motion'
import { Home, Maximize, Users } from 'lucide-react'
import Image from 'next/image'
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
        floorPlan: "/Website%20Photos/Two%20Bedroom/TWO%20BEDROOM%20FLOOR%20PLAN%20(BLOCK%20A).png",
        image: "/images/interiors/two-bedroom-living.jpg"
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
        floorPlan: "/Website%20Photos/One%20Bedroom/ONE%20BEDROOM%20FLOOR%20PLAN%20(BLOCKS%20B,C,D).png",
        image: "/images/interiors/one-bedroom-living.jpg"
      },
      {
        count: 18,
        bedrooms: 2,
        sqft: 1444,
        description: "Generous two-bedroom layouts with premium amenities",
        floorPlan: "/Website%20Photos/Two%20Bedroom/TWO%20BEDROOM%20FLOOR%20PLAN%20(BLOCKS%20B,C,D).png",
        image: "/images/interiors/two-bedroom-bedroom.jpg"
      },
      {
        count: 18,
        bedrooms: 3,
        sqft: 2087,
        description: "Luxurious three-bedroom residences with panoramic views",
        floorPlan: "/Website%20Photos/Three%20Bedroom/THREE%20BEDROOM%20FLOOR%20PLAN%20(BLOCKS%20B,C,D).png",
        image: "/images/interiors/three-bedroom-living.jpg"
      }
    ]
  }
]

export default function Units() {
  const totalUnits = unitTypes.reduce((acc, block) => 
    acc + block.units.reduce((blockAcc, unit) => blockAcc + unit.count, 0), 0
  )

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
                    
                    <div className="text-xs text-blue-600 space-y-1">
                      <div>• In-unit laundry room</div>
                      <div>• Private powder room</div>
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
    </section>
  )
}