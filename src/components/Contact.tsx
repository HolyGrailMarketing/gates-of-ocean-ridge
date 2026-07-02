'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Facebook, MapPin, Smartphone, Globe } from 'lucide-react'
import OptimizedImage from './OptimizedImage'
import { semanticColors } from '../styles/colors'

export default function Contact() {
  return (
    <footer id="contact" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With Us
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Units are available now. Reach out to our team to schedule a viewing or reserve your home.
          </p>
        </motion.div>

        {/* Exclusive Realtor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl bg-gray-800 ring-1 ring-white/10 overflow-hidden"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-8 p-6 md:p-8 items-center">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <OptimizedImage
                src="/images/realtor/stephane-mais.jpg"
                alt="Stephane Mais, Realtor Associate at RCI Realty Plus"
                width={176}
                height={205}
                sizes="176px"
                className="rounded-xl object-cover w-40 h-48 md:w-44 md:h-52 ring-2 ring-blue-500/40 shadow-lg"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 mb-2">
                EXCLUSIVE REALTOR
              </p>
              <h3 className="text-2xl font-bold">Stephane Mais</h3>
              <p className="text-gray-400 mb-6">Realtor Associate &middot; RCI Realty Plus</p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Smartphone size={18} className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Mobile</p>
                    <a href="tel:+18763291208" className="text-gray-300 hover:text-blue-400 transition-colors">
                      (876) 329-1208
                    </a>
                  </div>
                </div>

                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Phone size={18} className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Office</p>
                    <a href="tel:+18766180164" className="text-gray-300 hover:text-blue-400 transition-colors block">
                      (876) 618-0164
                    </a>
                    <a href="tel:+18767000930" className="text-gray-300 hover:text-blue-400 transition-colors block">
                      (876) 700-0930
                    </a>
                  </div>
                </div>

                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Mail size={18} className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Email</p>
                    <a href="mailto:smais@rcirealtyplus.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                      smais@rcirealtyplus.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Globe size={18} className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Website</p>
                    <a href="https://www.rcirealtyplus.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                      www.rcirealtyplus.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start justify-center md:justify-start space-x-3 sm:col-span-2">
                  <MapPin size={18} className="flex-shrink-0 mt-1 text-blue-400" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Office Address</p>
                    <p className="text-gray-300">3 Musgrave Avenue, Kingston 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-600 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <div className="space-y-1">
                  <a href="tel:+18766781039" className="text-gray-300 hover:text-blue-400 transition-colors block">
                    (876) 678-1039
                  </a>
                  <a href="tel:+18766781155" className="text-gray-300 hover:text-blue-400 transition-colors block">
                    (876) 678-1155
                  </a>
                  <a href="https://wa.me/18768188317" className="text-gray-300 hover:text-green-400 transition-colors block">
                    WhatsApp: (876) 818-8317
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-600 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:info@renovaredevelopments.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@renovaredevelopments.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-green-600 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-300">
                  103 Main Street<br />
                  Ocho Rios, St. Ann<br />
                  Jamaica
                </p>
              </div>
            </div>
          </motion.div>

          {/* About Renovare Developments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">About Renovare Development Company Limited</h3>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Renovare Development Company Limited, a premier luxury real estate development company committed to creating exceptional living experiences. With our unwavering commitment to quality, innovation, and timeless design, we transform landscapes into iconic residential properties that redefine luxury living. Our team of passionate professionals, including architects, engineers, designers, and project managers, collaborate seamlessly to bring visionary concepts to life. We are driven by a passion for excellence and a commitment to delivering homes that surpass expectations. Our dedication to unparalleled quality, personalized service, and attention to detail ensures that every client's dream of a truly extraordinary home becomes a reality. Contact us today to discover the true essence of refined living.
            </p>
            <div className="bg-blue-900 bg-opacity-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-300 mb-2">Now Selling</h4>
              <p className="text-gray-300 text-sm">
                Follow our progress and be among the first to experience luxury sustainable living 
                at The Gates of Ocean Ridge.
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Follow Our Journey</h3>
            
            <div className="space-y-4">
              <a 
                href="https://instagram.com/renovaredevelopments.ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Instagram</h4>
                  <p className="text-gray-400 text-sm">@renovaredevelopments.ja</p>
                </div>
              </a>

              <a 
                href="https://facebook.com/renovaredevelopments.ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-full group-hover:scale-110 transition-transform">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Facebook</h4>
                  <p className="text-gray-400 text-sm">@renovaredevelopments.ja</p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-6 text-center">
              <h4 className="font-semibold mb-3">Stay Connected</h4>
              <p className="text-blue-100 text-sm mb-4">
                Follow us on social media for exclusive updates, behind-the-scenes content, 
                and early access to development news.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © 2026 Renovare Development Company Limited. All rights reserved. | The Gates of Ocean Ridge - Now Selling
          </p>
        </motion.div>
      </div>
    </footer>
  )
}