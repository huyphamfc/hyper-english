import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Observer from '../Observer';
import BackToTopButton from '../BackToTopButton';

function BackToTop({ Target, children }) {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(true);

  const handleToggleBackToTopBtn = () => {
    setShowBackToTopBtn((state) => !state);
  };

  return (
    <>
      <Observer toggleBackToTop={handleToggleBackToTopBtn}>
        <Target />
      </Observer>
      {children}
      {showBackToTopBtn && <BackToTopButton />}
    </>
  );
}

BackToTop.propTypes = {
  Target: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackToTop;
