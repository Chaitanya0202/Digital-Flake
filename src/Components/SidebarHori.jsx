import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiAnalyse } from 'react-icons/bi';
import { FaHome, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <FaHome />,
  },
  {
    path: '/product',
    name: 'Product',
    icon: <FaUser />,
  },
  {
    path: '/category',
    name: 'Category',
    icon: <MdMessage />,
  },
  {
    path: '/subCategory',
    name: 'Grievance',
    icon: <BiAnalyse />,
  },
];

const SidebarHorizontal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="fixed inset-0 flex">
      <motion.div
        animate={{
          width: isOpen ? '200px' : '45px',
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 10,
          },
        }}
        className=" text-black h-screen overflow-y-auto"
        style={{ backgroundColor: 'gray', marginTop: 75 }}
      >
        <div className="flex items-center justify-between p-3">
          {/* Any header content here */}
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link flex items-center justify-between text-white p-2 border-r-4 border-transparent transition-colors hover:bg-blue-800 hover:border-white"
              >
                <div className="flex items-center">
                  <div className="icon">{route.icon}</div>
                  <div className="link_text">{route.name}</div>
                </div>
                {isOpen && (
                  <AnimatePresence>
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="right_arrow"
                    >
                      <span>&rsaquo;</span>
                    </motion.div>
                  </AnimatePresence>
                )}
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SidebarHorizontal;
