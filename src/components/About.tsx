'use client'

import { motion } from 'framer-motion'
import { semanticColors } from '../styles/colors'

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: 'white', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '200',
            color: semanticColors.text.primary,
            marginBottom: '2rem',
            letterSpacing: '0.02em'
          }}>
            Luxury Meets Sustainability
          </h2>
          <p style={{ 
            fontSize: '1.25rem',
            color: semanticColors.text.secondary,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '300'
          }}>
            114 thoughtfully designed units across four modern buildings in Ocean Ridge, 
            Towel Isle St. Mary, featuring breathtaking ocean views and world-class amenities.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: semanticColors.background.secondary,
              borderRadius: '2px',
              border: `1px solid ${semanticColors.background.muted}`
            }}
          >
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: '100', 
              color: semanticColors.brand.primary, 
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              114
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '400', 
              color: semanticColors.text.primary, 
              marginBottom: '0.5rem',
              letterSpacing: '0.025em'
            }}>
              Total Units
            </h3>
            <p style={{ 
              color: semanticColors.text.secondary, 
              fontSize: '0.9rem',
              fontWeight: '300',
              lineHeight: '1.5'
            }}>
              Luxury apartments ranging from 960 to 2087 sq.ft
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: semanticColors.background.secondary,
              borderRadius: '2px',
              border: `1px solid ${semanticColors.background.muted}`
            }}
          >
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: '100', 
              color: semanticColors.categories.sustainability, 
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              16+
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '400', 
              color: semanticColors.text.primary, 
              marginBottom: '0.5rem',
              letterSpacing: '0.025em'
            }}>
              Premium Amenities
            </h3>
            <p style={{ 
              color: semanticColors.text.secondary, 
              fontSize: '0.9rem',
              fontWeight: '300',
              lineHeight: '1.5'
            }}>
              From 24-hour security to rooftop entertainment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: semanticColors.background.secondary,
              borderRadius: '2px',
              border: `1px solid ${semanticColors.background.muted}`
            }}
          >
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: '100', 
              color: semanticColors.brand.secondary, 
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              100%
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '400', 
              color: semanticColors.text.primary, 
              marginBottom: '0.5rem',
              letterSpacing: '0.025em'
            }}>
              GREEN Community
            </h3>
            <p style={{ 
              color: semanticColors.text.secondary, 
              fontSize: '0.9rem',
              fontWeight: '300',
              lineHeight: '1.5'
            }}>
              Sustainable living with eco-friendly features
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}