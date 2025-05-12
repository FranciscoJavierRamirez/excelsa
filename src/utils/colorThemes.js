/**
 * Utility to get color themes for different sections of the website
 * @param {string} themeName - Name of the theme (brand, conventional, alternative, psychology, integrative, methodology)
 * @returns {Object} - Object with Tailwind CSS classes for the theme
 */
export function getThemeColors(themeName = 'brand') {
  // All themes aligned with global.css variables and color system
  const themes = {
    // Brand theme (sky blue)
    brand: {
      primary: 'sky-500',
      light: 'sky-100',
      dark: 'sky-600',
      text: 'text-sky-500',
      bg: 'bg-sky-50',
      hoverText: 'hover:text-sky-600',
      hoverBg: 'hover:bg-sky-50',
      activeClasses: 'bg-sky-500 text-white',
      buttonPrimary: 'bg-sky-500 hover:bg-sky-600 text-white',
      buttonSecondary: 'bg-white border border-sky-500 text-sky-500 hover:bg-sky-50',
      gradient: 'bg-gradient-to-r from-sky-400 to-sky-500',
      gradientDark: 'bg-gradient-to-r from-sky-500 to-sky-600',
      badgeClass: 'bg-sky-100 text-sky-500',
      dividerClass: 'bg-gradient-to-r from-sky-400 to-sky-300',
      cssGradient: 'linear-gradient(135deg, #38BDF8, #0EA5E9)'
    },
    
    // Medicina convencional (blue)
    conventional: {
      primary: 'blue-600',
      light: 'blue-50',
      dark: 'blue-700',
      text: 'text-blue-600',
      bg: 'bg-blue-50',
      hoverText: 'hover:text-blue-700',
      hoverBg: 'hover:bg-blue-50',
      activeClasses: 'bg-blue-600 text-white',
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50',
      gradient: 'bg-gradient-to-r from-blue-600 to-teal-500',
      gradientDark: 'bg-gradient-to-r from-blue-700 to-teal-600',
      badgeClass: 'bg-blue-50 text-blue-600',
      dividerClass: 'bg-gradient-to-r from-blue-600 to-teal-500',
      cssGradient: 'linear-gradient(135deg, #3b82f6, #2dd4bf)'
    },
    
    // Medicina alternativa/terapias (green)
    alternative: {
      primary: 'green-600',
      light: 'green-50',
      dark: 'green-700',
      text: 'text-green-600',
      bg: 'bg-green-50',
      hoverText: 'hover:text-green-700',
      hoverBg: 'hover:bg-green-50',
      activeClasses: 'bg-green-600 text-white',
      buttonPrimary: 'bg-green-600 hover:bg-green-700 text-white',
      buttonSecondary: 'bg-white border border-green-600 text-green-600 hover:bg-green-50',
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500',
      gradientDark: 'bg-gradient-to-r from-green-600 to-teal-600',
      badgeClass: 'bg-green-50 text-green-600',
      dividerClass: 'bg-gradient-to-r from-green-500 to-teal-500',
      cssGradient: 'linear-gradient(135deg, #22c55e, #2dd4bf)'
    },
    
    // Psicología (amber/orange)
    psychology: {
      primary: 'amber-500',
      light: 'amber-50',
      dark: 'amber-600',
      text: 'text-amber-500',
      bg: 'bg-amber-50',
      hoverText: 'hover:text-amber-600',
      hoverBg: 'hover:bg-amber-50',
      activeClasses: 'bg-amber-500 text-white',
      buttonPrimary: 'bg-amber-500 hover:bg-amber-600 text-white',
      buttonSecondary: 'bg-white border border-amber-500 text-amber-500 hover:bg-amber-50',
      gradient: 'bg-gradient-to-r from-amber-500 to-orange-400',
      gradientDark: 'bg-gradient-to-r from-amber-600 to-orange-500',
      badgeClass: 'bg-amber-50 text-amber-600',
      dividerClass: 'bg-gradient-to-r from-amber-500 to-orange-400',
      cssGradient: 'linear-gradient(135deg, #f59e0b, #fb923c)'
    },
    
    // Consultas integrativas (purple)
    integrative: {
      primary: 'purple-600',
      light: 'purple-50',
      dark: 'purple-700',
      text: 'text-purple-600',
      bg: 'bg-purple-50',
      hoverText: 'hover:text-purple-700',
      hoverBg: 'hover:bg-purple-50',
      activeClasses: 'bg-purple-600 text-white',
      buttonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
      buttonSecondary: 'bg-white border border-purple-600 text-purple-600 hover:bg-purple-50',
      gradient: 'bg-gradient-to-r from-purple-600 to-pink-500',
      gradientDark: 'bg-gradient-to-r from-purple-700 to-pink-600',
      badgeClass: 'bg-purple-100 text-purple-600',
      dividerClass: 'bg-gradient-to-r from-purple-600 to-pink-500',
      cssGradient: 'linear-gradient(135deg, #9333ea, #ec4899)'
    },
    
    // Metodología (purple/indigo)
    methodology: {
      primary: 'indigo-600',
      light: 'indigo-50',
      dark: 'indigo-700',
      text: 'text-indigo-600',
      bg: 'bg-indigo-50',
      hoverText: 'hover:text-indigo-700',
      hoverBg: 'hover:bg-indigo-50',
      activeClasses: 'bg-indigo-600 text-white',
      buttonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      buttonSecondary: 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      gradient: 'bg-gradient-to-r from-purple-600 to-indigo-500',
      gradientDark: 'bg-gradient-to-r from-purple-700 to-indigo-600',
      badgeClass: 'bg-indigo-50 text-indigo-600',
      dividerClass: 'bg-gradient-to-r from-purple-600 to-indigo-500',
      cssGradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
    }
  };
  
  // Return the requested theme or default to brand theme
  return themes[themeName] || themes.brand;
}

/**
 * Get gradient classes for team members
 * @param {string} memberName - Name of the team member (sergio, sheril, giancarlo, gianfranco, sergiomatias)
 * @returns {Object} - Object with gradient classes for the team member
 */
export function getTeamMemberGradient(memberName = 'sergio') {
  const gradients = {
    sergio: {
      gradient: 'bg-gradient-to-r from-blue-600 to-teal-500',
      borderClass: 'miembro-border-sergio',
      iconBadgeClass: 'miembro-icon-badge-sergio',
      tagClass: 'miembro-tag-sergio',
      highlightClass: 'miembro-highlight-sergio',
      textColor: 'text-blue-600'
    },
    sheril: {
      gradient: 'bg-gradient-to-r from-purple-600 to-pink-500',
      borderClass: 'miembro-border-sheril',
      iconBadgeClass: 'miembro-icon-badge-sheril',
      tagClass: 'miembro-tag-sheril',
      highlightClass: 'miembro-highlight-sheril',
      textColor: 'text-pink-600'
    },
    giancarlo: {
      gradient: 'bg-gradient-to-r from-teal-500 to-green-400',
      borderClass: 'miembro-border-giancarlo',
      iconBadgeClass: 'miembro-icon-badge-giancarlo',
      tagClass: 'miembro-tag-giancarlo',
      highlightClass: 'miembro-highlight-giancarlo',
      textColor: 'text-green-600'
    },
    gianfranco: {
      gradient: 'bg-gradient-to-r from-amber-500 to-orange-400',
      borderClass: 'miembro-border-gianfranco',
      iconBadgeClass: 'miembro-icon-badge-gianfranco',
      tagClass: 'miembro-tag-gianfranco',
      highlightClass: 'miembro-highlight-gianfranco',
      textColor: 'text-orange-600'
    },
    sergiomatias: {
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-400',
      borderClass: 'miembro-border-sergiomatias',
      iconBadgeClass: 'miembro-icon-badge-sergiomatias',
      tagClass: 'miembro-tag-sergiomatias',
      highlightClass: 'miembro-highlight-sergiomatias',
      textColor: 'text-indigo-600'
    }
  };
  
  return gradients[memberName] || gradients.sergio;
}

/**
 * Get course level styling
 * @param {number} level - Course level (1, 2, or 3)
 * @returns {Object} - Object with styling classes for the course level
 */
export function getCourseLevel(level = 1) {
  const levels = {
    1: {
      containerClass: 'curso-nivel-1',
      badgeClass: 'curso-nivel-1-badge',
      titleClass: 'curso-nivel-1-title'
    },
    2: {
      containerClass: 'curso-nivel-2',
      badgeClass: 'curso-nivel-2-badge',
      titleClass: 'curso-nivel-2-title'
    },
    3: {
      containerClass: 'curso-nivel-3',
      badgeClass: 'curso-nivel-3-badge',
      titleClass: 'curso-nivel-3-title'
    }
  };
  
  return levels[level] || levels[1];
}

/**
 * Map color names between different naming systems
 * @param {string} name - Original color name
 * @param {string} fromSystem - Source system ('themes', 'paste', 'global')
 * @param {string} toSystem - Target system ('themes', 'paste', 'global')
 * @returns {string} - Equivalent name in the target system
 */
export function getEquivalentColorName(name, fromSystem, toSystem) {
  const mappings = {
    'themes': {
      'paste': {
        'brand': 'sky',
        'conventional': 'medicina',
        'alternative': 'alternativa',
        'psychology': 'psicologia',
        'integrative': 'integrativa',
        'methodology': 'metodologia'
      }
    },
    'paste': {
      'global': {
        'medicina': 'medicina',
        'psicologia': 'psicologia',
        'alternativa': 'terapias',
        'integrativa': 'psico',
        'metodologia': 'psico'
      }
    }
  };
  
  return mappings[fromSystem]?.[toSystem]?.[name] || name;
}