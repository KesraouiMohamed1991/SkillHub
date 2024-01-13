import { useDarkMode } from '../Utils/DarkModeContext';
import Moon from '../assets/Moon';
import Sun from '../assets/Sun';
import Menu from '../assets/Menu';
import MenuOpen from '../assets/MenuOpen';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [show, setShow] = useState(false);

  function handleShowMenuItem() {
    setShow(!show)
    
}

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Creatives', path: '/Creatives' },
    { label: 'Services', path: '/Services' },
    { label: 'Profil', path: '/Profil' },
    { label: 'Login', path: '/login' },
  ];

  return (
    <nav className="w-full relative flex items-center justify-between px-4 sm:px-16 h-16 text-primary bg-background dark:text-background dark:bg-primary">
   <h1>
  <Link to="/" className="text-2xl font-bold font-serif" style={{ textStroke: '1px black' }}>
    SkillHub
  </Link>
</h1>

      <div className="flex items-center gap-8">
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none hidden sm:block"
          aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Moon className={!darkMode ? 'text-black' : 'text-white'} /> : <Sun className={!darkMode ? 'text-black' : 'text-white'} />}
        </button>
        <button className="focus:outline-none" onClick={ handleShowMenuItem}>
          {show ? <MenuOpen /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 600 }}
            transition={{ duration: 0.5 }}
            className="sm:h-[700px] z-20 sm:w-[600px] dark:bg-accent bg-secondary rounded-lg absolute right-0 top-20 p-16"
          >
            <motion.ul
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                animate: { transition: { staggerChildren: 0.2 } },
                exit: { transition: { staggerChildren: 0.2 } },
              }}
              className="text-primary dark:text-background text-3xl flex justify-center flex-col"
            >
              <button
                onClick={toggleDarkMode}
                className="focus:outline-none sm:hidden absolute top-10 right-10 block"
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <Moon className={!darkMode ? 'text-black' : 'text-white'} />
              </button>
              {menuItems.map((menuItem, index) => (
                <Link to={menuItem.path} key={index}>
                  <motion.li
                    onClick={handleShowMenuItem}
                    variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.5 }}
                    className="m-2 relative group py-4 w-1/2 font-sans"
                  >
                    <span className='text-sm sm:text-lg md:text-xl lg:text-5xl'>{menuItem.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black dark:bg-secondary transition-all duration-500 group-hover:w-2/3"></span>
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
