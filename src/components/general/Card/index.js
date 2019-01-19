/**
 *
 * <Card />
 *
 * A Simple Container with Props
 *
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'components/general/Img';

const CardBody = styled.div`
  #card-content {
    padding: 2rem;
  }
`;

export class Card extends Component {
  render() {
    const { imgSrc, children, imgCircle } = this.props;
    let image;

    if (imgCircle) {
      image = <Img src={imgSrc} alt="" className="img-fluid w-100" round />;
    } else {
      image = <Img src={imgSrc} alt="" className="img-fluid w-100" />;
    }
    return (
      <CardBody>
        {image}
        <div id="card-content">{children}</div>
      </CardBody>
    );
  }
}

export default Card;
