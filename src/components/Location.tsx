'use client'

import { motion } from 'framer-motion'
import { MapPin, Leaf, Waves, Mountain } from 'lucide-react'
import Image from 'next/image'
import { semanticColors } from '../styles/colors'

export default function Location() {
  return (
    <section id="location" className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paradise Location
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Ocean Ridge, Towel Isle St. Mary - where luxury meets environmental consciousness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Prime Ocean Ridge Location
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located in the exclusive Ocean Ridge area of Towel Isle St. Mary, 
                  offering stunning coastal views and pristine natural surroundings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                <Leaf className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable GREEN Community
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to environmental stewardship includes rain water harvesting, 
                  composting facilities, and energy-efficient systems throughout the development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                <Waves className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Oceanfront Lifestyle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wake up to breathtaking ocean views and enjoy direct access to pristine beaches, 
                  water sports, and coastal recreation activities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                <Mountain className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Natural Beauty & Tranquility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Surrounded by lush tropical landscapes and rolling hills, 
                  providing a serene escape while maintaining modern convenience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Location showcase with project images */}
            <div className="grid grid-cols-2 gap-4 h-96">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/exterior/exterior-8.jpg"
                  alt="Ocean Ridge Development View"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="space-y-4">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src="/images/exterior/exterior-10.jpg"
                    alt="Ocean Ridge Architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src="/images/exterior/exterior-11.jpg"
                    alt="Ocean Ridge Landscape"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src="/images/exterior/exterior-12.jpg"
                    alt="Ocean Ridge Community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            
            {/* Location info overlay */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="text-blue-600" size={20} />
                <h3 className="font-bold text-gray-900">
                  Ocean Ridge
                </h3>
              </div>
              <p className="text-sm text-gray-700">
                Towel Isle, St. Mary<br />
                Jamaica
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Environmental Commitment
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Renewable Energy Ready</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">60%</div>
              <div className="text-sm">Water Conservation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">50%</div>
              <div className="text-sm">Waste Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">40%</div>
              <div className="text-sm">Green Space Preservation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}