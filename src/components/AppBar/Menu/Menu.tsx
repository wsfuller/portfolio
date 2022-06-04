import React from 'react';
import { FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

import MenuProps from './Menu.props';
import { StyledMenu, StyledMenuOverlay, StyledMenuContent } from './Menu.styles';
import menuLinks from './menu-links';

import Avatar from '../../Avatar';
import ActionButton from '../ActionButton';

import SteveAvatar from '../../../assets/images/avatars/steve.png';
import SteveAvatar2x from '../../../assets/images/avatars/steve@2x.png';

// import Branding from './Branding';

const Menu: React.FC<MenuProps> = ({ isOpen, cycleMenu }) => {
  const DELAY = 0.35;
  const DURATION = 0.5;

  const MENU_LINK_VARIANTS = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <StyledMenu
            initial={{ width: 100 }}
            animate={{ width: 300 }}
            exit={{
              width: 0,
              transition: { delay: DELAY, duration: DURATION },
            }}
          >
            <motion.header
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { delay: DELAY, duration: DURATION },
              }}
              exit={{
                opacity: 0,
                transition: { delay: DELAY, duration: DURATION },
              }}
            >
              <ActionButton onClick={cycleMenu}>
                <FiX />
              </ActionButton>
            </motion.header>

            <StyledMenuContent
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: {
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: -1,
                  },
                },
                open: {
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: 1,
                  },
                },
              }}
            >
              <Avatar
                src={SteveAvatar}
                srcSet={`${SteveAvatar} 1x, ${SteveAvatar2x} 2x`}
                alt="Cartoon illustration of William S Fuller"
                width="6.25rem"
                height="700rem"
              />
              {/* <Branding /> */}
              {/* Logo */}
              {/* Location */}
              {/* Social Media */}
              {/* end Section */}
              {/* Nav */}
              {menuLinks.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={MENU_LINK_VARIANTS}
                >
                  {name}
                </motion.a>
              ))}
            </StyledMenuContent>
          </StyledMenu>
          <StyledMenuOverlay />
        </>
      )}
    </AnimatePresence>
  );
};
export default Menu;
