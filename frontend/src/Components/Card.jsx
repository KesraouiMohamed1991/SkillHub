import { motion } from 'framer-motion';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Card({ title, url }) {
  const [show, setShow] = useState(false);

  const cardStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
      <motion.div
      onMouseEnter={() => setShow(true)}  // Use a function here
      onMouseLeave={() => setShow(false)} // Optional: Add onMouseLeave to hide the text when not hovering
      className='h-72 w-96 rounded-xl hover:opacity-100 group transition-all'
      style={cardStyle}
    >
      {show && (
        <div className="h-full w-full bg-secondary/50 items-center justify-center flex">
          <h1 className="text-primary font-extrabold text-3xl text-center">{title}</h1>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
