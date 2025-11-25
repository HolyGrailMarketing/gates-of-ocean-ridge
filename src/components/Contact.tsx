'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react'
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
            Stay updated on development progress and be first to know when units become available.
          </p>
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
                  Ocean Ridge<br />
                  Towel Isle St. Mary<br />
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
            <h3 className="text-2xl font-semibold mb-6">About Renovare Developments</h3>
            <p className="text-gray-300 leading-relaxed">
              Renovare Developments is committed to creating exceptional living experiences 
              that blend luxury with environmental responsibility. The Gates of Ocean Ridge 
              represents our dedication to sustainable development and community excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team brings decades of experience in luxury real estate development, 
              with a focus on innovative design, quality construction, and environmental stewardship.
            </p>
            <div className="bg-blue-900 bg-opacity-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-300 mb-2">Coming Soon 2026</h4>
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
            © 2025 Renovare Developments. All rights reserved. | The Gates of Ocean Ridge - Coming Soon 2026
          </p>
        </motion.div>
      </div>
    </footer>
  )
}