import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

function Observer({ toggleBackToTop, children }) {
  return (
    <InView as="div" onChange={toggleBackToTop}>
      {children}
    </InView>
  );
}

Observer.propTypes = {
  toggleBackToTop: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Observer;
