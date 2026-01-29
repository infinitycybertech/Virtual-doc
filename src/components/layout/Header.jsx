import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  NAVIGATION, 
  NAVIGATION_XH,
  NAVIGATION_TS 
} from '../../constants';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 70px;
  
  @media (max-width: 1300px) {
    padding: 1rem 1rem;
  }
  
  @media (max-width: 1200px) {
    padding: 0.8rem 0.8rem;
  }
  
  @media (max-width: 1100px) {
    padding: 1rem;
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    min-height: 60px;
    justify-content: space-between;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.75rem;
    min-height: 55px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: fit-content;
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 1100px) {
    font-size: 1.4rem;
    justify-content: center;
    flex: 1;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    justify-content: flex-start;
    flex: none;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  margin-left: 1rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    margin-left: 0.5rem;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.2rem;
  flex-wrap: nowrap;
  align-items: center;
  
  @media (max-width: 1300px) {
    gap: 1rem;
  }
  
  @media (max-width: 1200px) {
    gap: 0.8rem;
  }
`;

const NavLink = styled(motion.li)`
  position: relative;
  
  a {
    color: var(--text-primary);
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
    font-size: 0.9rem;
    white-space: nowrap;
    display: block;
    
    &:hover {
      color: var(--primary);
    }
    
    @media (max-width: 1300px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 1200px) {
      font-size: 0.8rem;
    }
  }
`;

const ActionButton = styled(motion.button)`
  background: var(--primary);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  margin-left: 1rem;
  transition: background 0.3s ease;
  font-size: 0.85rem;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: var(--primary-dark);
  }
  
  @media (max-width: 1300px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
    margin-left: 0.8rem;
  }
  
  @media (max-width: 1200px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
    margin-left: 0.6rem;
  }
`;

const LanguageToggle = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.4rem 0.6rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  margin-left: 0.8rem;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  .full-text {
    display: inline;
  }
  
  .compact-text {
    display: none;
  }
  
  &:hover {
    background: var(--primary);
    color: white;
  }
  
  @media (max-width: 1300px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
    margin-left: 0.6rem;
  }
  
  @media (max-width: 1200px) {
    padding: 0.3rem 0.4rem;
    font-size: 0.65rem;
    margin-left: 0.5rem;
    
    .full-text {
      display: none;
    }
    
    .compact-text {
      display: inline;
    }
  }
  
  @media (max-width: 1100px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    
    .full-text {
      display: inline;
    }
    
    .compact-text {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  transition: all 0.3s ease;
  
  @media (max-width: 1100px) {
    display: block;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    right: 0.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    right: 0.5rem;
    padding: 0.4rem;
  }
  
  &:hover {
    color: #3498db;
    transform: scale(1.1);
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1001;
  display: none;
  
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuContent = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 95%;
    max-width: 350px;
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    width: 95%;
    max-width: 300px;
    padding: 1.25rem;
    border-radius: 8px;
  }
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
  
  &:hover {
    color: #e74c3c;
    transform: scale(1.1);
  }
`;

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    gap: 1.25rem;
    margin-top: 0.75rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.65rem 0;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    padding: 0.5rem 0;
  }
  
  &:hover {
    color: #e74c3c;
    background-color: #f8f9fa;
    padding-left: 0.5rem;
    transform: translateX(5px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &.login {
    color: var(--primary);
    border: 1px solid var(--primary);
    
    &:hover {
      background: var(--primary);
      color: white;
    }
  }
  
  &.signup {
    background: var(--primary);
    color: white;
    
    &:hover {
      background: #1a7bb8;
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

const UserName = styled.span`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
`;

const UserDropdown = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(30, 136, 229, 0.1);
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  min-width: 150px;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(30, 136, 229, 0.1);
  }
  
  &.logout {
    color: #ff4757;
    
    &:hover {
      background: rgba(255, 71, 87, 0.1);
    }
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { currentLanguage, switchLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Get the appropriate navigation constants based on current language
  const getNavigation = () => {
    if (currentLanguage === 'xh') return NAVIGATION_XH;
    if (currentLanguage === 'ts') return NAVIGATION_TS;
    return NAVIGATION;
  };
  
  const navigation = getNavigation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
    navigate('/');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getLanguageDisplayText = () => {
    switch (currentLanguage) {
      case 'en': return 'EN | English';
      case 'xh': return 'XH | isiXhosa';
      case 'ts': return 'TS | Xitsonga';
      default: return 'EN | English';
    }
  };

  const getCompactLanguageDisplayText = () => {
    switch (currentLanguage) {
      case 'en': return 'EN';
      case 'xh': return 'XH';
      case 'ts': return 'TS';
      default: return 'EN';
    }
  };

  const handleLanguageToggle = () => {
    switchLanguage();
  };

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };
  return (
    <>
      <HeaderContainer>
        <Logo to="/">
          {navigation.LOGO.text}.<span>{navigation.LOGO.accent}</span>
        </Logo>
        <Nav>
          <NavLinks>
            {navigation.MENU_ITEMS.map((item, index) => (
              <NavLink key={index} whileHover={{ y: -2 }}>
                <Link to={item.href}>{item.text}</Link>
              </NavLink>
            ))}
          </NavLinks>
          <ActionButton 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={handleAppointmentClick}
          >
            {navigation.CTA_BUTTON}
          </ActionButton>
          <LanguageToggle 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={handleLanguageToggle}
          >
            <span className="full-text">{getLanguageDisplayText()}</span>
            <span className="compact-text">{getCompactLanguageDisplayText()}</span>
          </LanguageToggle>
          
          {/* Authentication Section */}
          {user ? (
            <UserSection>
              <UserName>Hi, {user.firstName}!</UserName>
              <UserDropdown>
                <DropdownButton onClick={toggleUserDropdown}>
                  <i className="fas fa-user"></i>
                </DropdownButton>
                <AnimatePresence>
                  {isUserDropdownOpen && (
                    <DropdownMenu
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DropdownItem to="/dashboard">Dashboard</DropdownItem>
                      <DropdownItem to="/profile">Profile</DropdownItem>
                      <DropdownItem 
                        as="button" 
                        className="logout"
                        onClick={handleLogout}
                        style={{ 
                          width: '100%', 
                          textAlign: 'left', 
                          border: 'none', 
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </AnimatePresence>
              </UserDropdown>
            </UserSection>
          ) : (
            <AuthSection>
              <AuthButton to="/login" className="login">Login</AuthButton>
              <AuthButton to="/signup" className="signup">Sign Up</AuthButton>
            </AuthSection>
          )}
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </MobileMenuButton>
      </HeaderContainer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileMenuClose onClick={closeMobileMenu}>
                <i className="fas fa-times"></i>
              </MobileMenuClose>
              
              <MobileNavList>
                {navigation.MENU_ITEMS.map((item, index) => (
                  <MobileNavLink key={index} to={item.href} onClick={closeMobileMenu}>
                    {item.text}
                  </MobileNavLink>
                ))}
                {user && (
                  <MobileNavLink to="/dashboard" onClick={closeMobileMenu}>
                    <i className="fas fa-tachometer-alt" style={{ marginRight: '0.5rem' }}></i>
                    Dashboard
                  </MobileNavLink>
                )}
                <MobileNavLink to="/appointment" onClick={closeMobileMenu}>
                  {navigation.CTA_BUTTON}
                </MobileNavLink>
                <LanguageToggle 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLanguageToggle}
                >
                  <span className="full-text">{getLanguageDisplayText()}</span>
                  <span className="compact-text">{getCompactLanguageDisplayText()}</span>
                </LanguageToggle>
              </MobileNavList>
            </MobileMenuContent>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
