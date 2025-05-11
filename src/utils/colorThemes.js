/**
 * Utility to get color themes for different sections of the website
 * @param {string} themeName - Name of the theme (brand, conventional, alternative, psychology, integrative)
 * @returns {Object} - Object with Tailwind CSS classes for the theme
 */
export function getThemeColors(themeName = 'brand') {
    // Default brand theme (blue)
    const themes = {
      brand: {
        primary: 'blue-600',
        light: 'blue-50',
        dark: 'blue-700',
        text: 'text-blue-600',
        bg: 'bg-blue-50',
        hoverText: 'hover:text-blue-600',
        hoverBg: 'hover:bg-blue-50',
        activeClasses: 'bg-blue-600 text-white',
        buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
        buttonSecondary: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50',
      },
      conventional: {
        primary: 'blue-600',
        light: 'blue-50',
        dark: 'blue-700',
        text: 'text-blue-600',
        bg: 'bg-blue-50',
        hoverText: 'hover:text-blue-600',
        hoverBg: 'hover:bg-blue-50',
        activeClasses: 'bg-blue-600 text-white',
        buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
        buttonSecondary: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50',
      },
      alternative: {
        primary: 'green-600',
        light: 'green-50',
        dark: 'green-700',
        text: 'text-green-600',
        bg: 'bg-green-50',
        hoverText: 'hover:text-green-600',
        hoverBg: 'hover:bg-green-50',
        activeClasses: 'bg-green-600 text-white',
        buttonPrimary: 'bg-green-600 hover:bg-green-700 text-white',
        buttonSecondary: 'bg-white border border-green-600 text-green-600 hover:bg-green-50',
      },
      psychology: {
        primary: 'orange-500',
        light: 'orange-50',
        dark: 'orange-600',
        text: 'text-orange-500',
        bg: 'bg-orange-50',
        hoverText: 'hover:text-orange-500',
        hoverBg: 'hover:bg-orange-50',
        activeClasses: 'bg-orange-500 text-white',
        buttonPrimary: 'bg-orange-500 hover:bg-orange-600 text-white',
        buttonSecondary: 'bg-white border border-orange-500 text-orange-500 hover:bg-orange-50',
      },
      integrative: {
        primary: 'purple-600',
        light: 'purple-50',
        dark: 'purple-700',
        text: 'text-purple-600',
        bg: 'bg-purple-50',
        hoverText: 'hover:text-purple-600',
        hoverBg: 'hover:bg-purple-50',
        activeClasses: 'bg-purple-600 text-white',
        buttonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
        buttonSecondary: 'bg-white border border-purple-600 text-purple-600 hover:bg-purple-50',
      }
    };
  
    // Return the requested theme or default to brand theme
    return themes[themeName] || themes.brand;
  }