/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H4 from 'components/general/H4';

export const ImageRound = styled.img`
  width: 100%;
  border-radius: 50%;
  background: ${props =>
    props.bg ? props.bg : 'linear-gradient(45deg,#0067bc 0,#8ee2f9 100%)'};
  padding: 0 !important;
`;

export const Img = props => {
  if (props.round) {
    return (
      <ImageRound
        bg={props.bg}
        className={props.className}
        src={props.src}
        alt={props.alt}
      />
    );
  }
  if (props.caption) {
    return (
      <React.Fragment>
        <img className={props.className} src={props.src} alt={props.alt} />
        <div className="text-center">
          <H4>{props.caption}</H4>
        </div>
      </React.Fragment>
    );
  }
  return <img className={props.className} src={props.src} alt={props.alt} />;
};

Img.defaultProps = {};

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
