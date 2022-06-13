import React from 'react';
import { FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

import MenuProps from './Menu.props';
import {
  StyledMenu,
  StyledMenuOverlay,
  StyledMenuContent,
  StyledMenuItem,
  StyledMenuAvatar,
  StyledMenuLink,
  StyledLocation,
} from './Menu.styles';
import menuLinks from './menu-links';
import Branding from './Branding';
import SocialMedia from './SocialMedia';

import ActionButton from '../ActionButton';

import SteveAvatar from '../../../assets/images/avatars/steve.png';
import SteveAvatar2x from '../../../assets/images/avatars/steve@2x.png';

const Menu: React.FC<MenuProps> = ({ isOpen, cycleMenu }) => {
  const DURATION = 0.5;
  const MENU_DELAY = 0.5;
  const MENU_OVERLAY_DELAY = 0.75;

  const MENU_ITEM_VARIANTS = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const NON_NAV_MENU_ITEMS = [
    {
      component: (
        <StyledMenuAvatar
          src={SteveAvatar}
          srcSet={`${SteveAvatar} 1x, ${SteveAvatar2x} 2x`}
          alt="Cartoon illustration of William S Fuller"
        />
      ),
      name: 'avatar',
    },
    {
      component: <Branding />,
      name: 'branding',
    },
    {
      component: (
        <StyledLocation>
          <FaMapMarkerAlt /> Seattle, WA
        </StyledLocation>
      ),
      name: 'location',
    },
    {
      component: <SocialMedia />,
      name: 'socialMedia',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <StyledMenu
            initial={{ width: 100 }}
            animate={{ width: 300 }}
            exit={{
              width: 0,
              transition: { delay: MENU_DELAY, duration: DURATION },
            }}
          >
            <motion.header
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: MENU_DELAY,
                },
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
                    staggerChildren: 0.07,
                    staggerDirection: -1,
                  },
                },
                open: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: 1,
                  },
                },
              }}
            >
              {NON_NAV_MENU_ITEMS.map(({ component, name }) => (
                <StyledMenuItem variants={MENU_ITEM_VARIANTS} key={name}>
                  {component}
                </StyledMenuItem>
              ))}

              {menuLinks.map(({ name, to }) => (
                <StyledMenuLink
                  key={name}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={MENU_ITEM_VARIANTS}
                >
                  {name}
                </StyledMenuLink>
              ))}
            </StyledMenuContent>
          </StyledMenu>
          <StyledMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: MENU_OVERLAY_DELAY } }}
            variants={MENU_ITEM_VARIANTS}
            onClick={cycleMenu}
          />
        </>
      )}
    </AnimatePresence>
  );
};
export default Menu;
