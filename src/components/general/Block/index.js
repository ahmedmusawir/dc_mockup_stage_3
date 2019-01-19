/**
 *
 * Block.js
 *
 * Renders a Content Section with styles and props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getBackground = props => {
  let bgColor;
  const themeBgColor = props.theme.palette.background;

  if (props.bgImgLink) {
    bgColor = `url(${props.bgImgLink})`;
  } else if (props.bgColor === 'dark') {
    bgColor = themeBgColor.dark;
  } else if (props.bgColor === 'light') {
    bgColor = themeBgColor.light;
  } else if (props.bgColor === 'grey') {
    bgColor = themeBgColor.grey;
  } else if (props.bgColor === 'dimgray') {
    bgColor = themeBgColor.dimgray;
  } else if (props.bgColor === 'gradient') {
    bgColor = themeBgColor.gradient;
  } else {
    bgColor = themeBgColor.neutral;
  }
  return bgColor;
};

const FlexGridBlock = styled.div`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  flex-basis: ${props => props.basis + '%'};

  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;

FlexGridBlock.defaultProps = {
  align: 'center',
  justify: 'center',
};

const GridBlock = styled.div`
  cursor: move;
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  grid-area: ${props => {
    let ratio;
    if (props.size === 'xs') {
      ratio = 'span 1 / span 1';
    } else if (props.size === 'sm') {
      ratio = 'span 2 / span 3';
    } else if (props.size === 'md') {
      ratio = 'span 3 / span 3';
    } else if (props.size === 'lg') {
      ratio = 'span 4 / span 6';
    } else if (props.size === 'custom') {
      ratio = 'span 4 / span 4';
    }
    return ratio;
  }};
`;

GridBlock.defaultProps = {
  size: 'md',
};

export class Block extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    flexBasis: PropTypes.string,
    gridSize: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const {
      children,
      bgColor,
      bgImgLink,
      flexBasis,
      gridSize,
      type,
      className,
      align,
      justify,
    } = this.props;

    if (type === 'grid') {
      return (
        <GridBlock
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          size={gridSize}
          className={className}
        >
          {children}
        </GridBlock>
      );
    } else {
      return (
        <FlexGridBlock
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          basis={flexBasis}
          className={className}
          align={align}
          justify={justify}
        >
          {children}
        </FlexGridBlock>
      );
    }
  }
}

Block.defaultProps = {
  bgColor: 'neutral',
  bgImgLink: null,
  type: 'flex',
  flexBasis: '100',
  gridSize: 'md',
};

export default Block;
