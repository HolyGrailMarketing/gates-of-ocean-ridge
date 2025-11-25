'use client'

import { motion } from 'framer-motion'
import { 
  SecurityIcon, 
  ChildCareIcon, 
  ElevatorIcon, 
  ConciergeIcon, 
  ClubhouseIcon, 
  FitnessIcon, 
  JoggingIcon, 
  PoolIcon, 
  BBQIcon, 
  RooftopIcon, 
  GeneratorIcon, 
  WaterHarvestIcon, 
  ChargingIcon, 
  GardenIcon, 
  GreenIcon, 
  StoreIcon 
} from './icons/AmenityIcons'
import { semanticColors } from '../styles/colors'

const amenities = [
  {
    icon: SecurityIcon,
    title: "24-Hour Security",
    description: "Round-the-clock security for your peace of mind",
    category: "Security & Services"
  },
  {
    icon: ChildCareIcon,
    title: "24-Hour Child Care",
    description: "Professional childcare services available anytime",
    category: "Security & Services"
  },
  {
    icon: ElevatorIcon,
    title: "Elevator Access",
    description: "Modern elevators in each building for convenience",
    category: "Security & Services"
  },
  {
    icon: ConciergeIcon,
    title: "Lobby Concierge",
    description: "Personalized service and assistance in every lobby",
    category: "Security & Services"
  },
  {
    icon: ClubhouseIcon,
    title: "Exclusive Clubhouse",
    description: "Elegant community space for social gatherings",
    category: "Recreation & Lifestyle"
  },
  {
    icon: FitnessIcon,
    title: "Fitness Center",
    description: "State-of-the-art equipment for your wellness journey",
    category: "Recreation & Lifestyle"
  },
  {
    icon: JoggingIcon,
    title: "Jogging Trail",
    description: "Scenic paths for your daily exercise routine",
    category: "Recreation & Lifestyle"
  },
  {
    icon: PoolIcon,
    title: "Infinity Pool & Hot Tub",
    description: "Stunning infinity pool with relaxing hot tub",
    category: "Recreation & Lifestyle"
  },
  {
    icon: BBQIcon,
    title: "BBQ Lounges & Fire Pits",
    description: "Multiple outdoor entertaining areas with fire features",
    category: "Recreation & Lifestyle"
  },
  {
    icon: RooftopIcon,
    title: "Rooftop Entertainment",
    description: "Spectacular rooftop areas with panoramic ocean views",
    category: "Recreation & Lifestyle"
  },
  {
    icon: GeneratorIcon,
    title: "Backup Power & Water",
    description: "Reliable backup generator and water tank systems",
    category: "Infrastructure"
  },
  {
    icon: WaterHarvestIcon,
    title: "Water Harvesting",
    description: "Rain & grey water collection for sustainable irrigation",
    category: "Sustainability"
  },
  {
    icon: ChargingIcon,
    title: "EV Charging Ports",
    description: "Convenient charging stations for electric vehicles",
    category: "Sustainability"
  },
  {
    icon: GardenIcon,
    title: "Composting & Herb Garden",
    description: "Community gardens promoting sustainable living",
    category: "Sustainability"
  },
  {
    icon: GreenIcon,
    title: "GREEN Community",
    description: "Environmentally conscious design and operations",
    category: "Sustainability"
  },
  {
    icon: StoreIcon,
    title: "Convenience Store",
    description: "On-site store for daily essentials and convenience",
    category: "Security & Services"
  }
]

const categories = [
  "Security & Services",
  "Recreation & Lifestyle", 
  "Infrastructure",
  "Sustainability"
]

export default function Amenities() {
  return (
    <section id="amenities" style={{ backgroundColor: semanticColors.background.secondary, padding: '6rem 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
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
            World-Class Amenities
          </h2>
          <p style={{ 
            fontSize: '1.125rem',
            color: semanticColors.text.secondary,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Premium amenities designed for comfort, convenience, and sustainable living.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryAmenities = amenities.filter(amenity => amenity.category === category)
          const categoryColors = {
            "Security & Services": semanticColors.categories.security,
            "Recreation & Lifestyle": semanticColors.categories.recreation,
            "Infrastructure": semanticColors.categories.infrastructure,
            "Sustainability": semanticColors.categories.sustainability
          }
          const color = categoryColors[category as keyof typeof categoryColors]
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: '4rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: '300',
                color: color,
                marginBottom: '2.5rem',
                textAlign: 'center',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {category}
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {categoryAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      backgroundColor: semanticColors.background.primary,
                      borderRadius: '2px',
                      padding: '2rem 1.5rem',
                      textAlign: 'center',
                      border: `1px solid ${semanticColors.background.muted}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = semanticColors.background.muted;
                    }}
                  >
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: `${color}10`,
                      color: color,
                      marginBottom: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}>
                      <amenity.icon size={28} />
                    </div>
                    
                    <h4 style={{ 
                      fontSize: '1rem',
                      fontWeight: '400',
                      color: semanticColors.text.primary,
                      marginBottom: '0.75rem',
                      letterSpacing: '0.025em'
                    }}>
                      {amenity.title}
                    </h4>
                    
                    <p style={{ 
                      color: semanticColors.text.secondary,
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      fontWeight: '300',
                      margin: 0
                    }}>
                      {amenity.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}