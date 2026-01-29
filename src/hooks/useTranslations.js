import { useLanguage } from '../contexts/LanguageContext';
import { 
  NAVIGATION, NAVIGATION_XH, NAVIGATION_TS,
  HOME_PAGE, HOME_PAGE_XH, HOME_PAGE_TS,
  ABOUT_PAGE, ABOUT_PAGE_XH, ABOUT_PAGE_TS,
  SERVICES_PAGE, SERVICES_PAGE_XH, SERVICES_PAGE_TS,
  DOCTORS_PAGE, DOCTORS_PAGE_XH, DOCTORS_PAGE_TS,
  CONTACT_PAGE, CONTACT_PAGE_XH, CONTACT_PAGE_TS,
  PORTFOLIO_PAGE, PORTFOLIO_PAGE_XH, PORTFOLIO_PAGE_TS,
  SPECIALISTS_DATA, SPECIALISTS_DATA_XH, SPECIALISTS_TS,
  CONSULTING_HERO, CONSULTING_HERO_XH, CONSULTING_TS,
  TESTIMONIALS_DATA, TESTIMONIALS_DATA_XH, TESTIMONIALS_TS,
  COMMON, COMMON_XH, COMMON_TS,
  APPOINTMENT, APPOINTMENT_XH, APPOINTMENT_TS,
  AUTH, AUTH_XH, AUTH_TS,
  API_DOCS, API_DOCS_XH, API_DOCS_TS
} from '../constants';

/**
 * Custom hook that provides access to all translation constants
 * automatically based on the current language
 */
export const useTranslations = () => {
  const { currentLanguage } = useLanguage();
  
  const isXhosa = currentLanguage === 'xh';
  const isTsonga = currentLanguage === 'ts';
  
  // Debug logging
  console.log('Current language:', currentLanguage, 'Is Xhosa:', isXhosa, 'Is Tsonga:', isTsonga);
  
  // Helper function to get the correct translation
  const getTranslation = (english, xhosa, tsonga) => {
    if (isTsonga) return tsonga || english;
    if (isXhosa) return xhosa || english;
    return english;
  };
  
  return {
    navigation: getTranslation(NAVIGATION, NAVIGATION_XH, NAVIGATION_TS),
    home: getTranslation(HOME_PAGE, HOME_PAGE_XH, HOME_PAGE_TS),
    about: getTranslation(ABOUT_PAGE, ABOUT_PAGE_XH, ABOUT_PAGE_TS),
    services: getTranslation(SERVICES_PAGE, SERVICES_PAGE_XH, SERVICES_PAGE_TS),
    doctors: getTranslation(DOCTORS_PAGE, DOCTORS_PAGE_XH, DOCTORS_PAGE_TS),
    contact: getTranslation(CONTACT_PAGE, CONTACT_PAGE_XH, CONTACT_PAGE_TS),
    portfolio: getTranslation(PORTFOLIO_PAGE, PORTFOLIO_PAGE_XH, PORTFOLIO_PAGE_TS),
    specialists: getTranslation(SPECIALISTS_DATA, SPECIALISTS_DATA_XH, SPECIALISTS_TS),
    consulting: getTranslation(CONSULTING_HERO, CONSULTING_HERO_XH, CONSULTING_TS),
    testimonials: getTranslation(TESTIMONIALS_DATA, TESTIMONIALS_DATA_XH, TESTIMONIALS_TS),
    common: getTranslation(COMMON, COMMON_XH, COMMON_TS),
    appointment: getTranslation(APPOINTMENT, APPOINTMENT_XH, APPOINTMENT_TS),
    auth: getTranslation(AUTH, AUTH_XH, AUTH_TS),
    api: getTranslation(API_DOCS, API_DOCS_XH, API_DOCS_TS),
  };
};