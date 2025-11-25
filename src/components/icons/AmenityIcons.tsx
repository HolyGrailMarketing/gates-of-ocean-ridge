interface IconProps {
  className?: string
  size?: number
}

export const SecurityIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ChildCareIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 14C8 13.45 8.45 13 9 13H15C15.55 13 16 13.45 16 14V17H8V14Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 21V19C6 17.9 6.9 17 8 17H16C17.1 17 18 17.9 18 19V21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const ElevatorIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6L12 2L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18L12 22L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="7" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1"/>
    <line x1="7" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

export const ConciergeIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 21V19C6 16.79 7.79 15 10 15H14C16.21 15 18 16.79 18 19V21" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 2L16 3L15 4L14 3L15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ClubhouseIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 9L12 2L21 9V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const FitnessIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7.01 10.5H16.99C17.54 10.5 17.99 10.95 17.99 11.5V12.5C17.99 13.05 17.54 13.5 16.99 13.5H7.01C6.46 13.5 6.01 13.05 6.01 12.5V11.5C6.01 10.95 6.46 10.5 7.01 10.5Z" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="8" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="8" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const JoggingIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 14L8 20L10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L16 20L14 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12L10 10L12 12L14 10L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const PoolIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 15C2 15 4 17 8 17C12 17 14 15 14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 15C10 15 12 17 16 17C20 17 22 15 22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 19C2 19 4 21 8 21C12 21 14 19 14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 19C10 19 12 21 16 21C20 21 22 19 22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const BBQIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="12" cy="17" rx="8" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 14L20 14" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8L9 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 8L17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RooftopIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10V19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19V10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const GeneratorIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="8" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="13" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 5L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 5L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const WaterHarvestIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L4 9V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V9L12 2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 15C8 16.1 8.9 17 10 17C11.1 17 12 16.1 12 15C12 14 10 12 10 12S8 14 8 15Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 17C14 18.1 14.9 19 16 19C17.1 19 18 18.1 18 17C18 16 16 14 16 14S14 16 14 17Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7L10 9L12 7L14 9L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ChargingIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="6" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="7" y="4" width="2" height="2" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M13 8V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M17 10L19 10C19.55 10 20 10.45 20 11V13C20 13.55 19.55 14 19 14H17V10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 10L7 12L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const GardenIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C13 2 14 3 14 4C14 5 13 6 12 6C11 6 10 5 10 4C10 3 11 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V22" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 10C6 8 4 10 4 12C4 14 6 16 8 14C10 12 8 10 8 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 10C18 8 20 10 20 12C20 14 18 16 16 14C14 12 16 10 16 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const GreenIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 8C14 6 10 6 8 8C6 10 6 14 8 16C10 18 14 18 16 16C18 14 18 10 16 8Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const StoreIcon = ({ className = "", size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 7V5C3 4.45 3.45 4 4 4H20C20.55 4 21 4.45 21 5V7" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 7V19C3 19.55 3.45 20 4 20H20C20.55 20 21 19.55 21 19V7" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)