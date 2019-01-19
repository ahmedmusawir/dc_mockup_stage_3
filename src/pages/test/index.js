import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import {
  H1,
  H3,
  P,
  Img,
  PageContainer,
  SectionBackground,
} from 'components/general';
/**
 * Paragraph
 *
 */
export const Paragraph = styled.div`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  border: 2px solid yellow;

  padding: ${props => (props.nopadding ? '0' : '1rem')};
  margin: 15px;

  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    padding: 0.5rem;
  }

  img {
    padding: ${props => (props.nopadding ? '0' : '0.5rem')};
  }
`;
/**
 *
 * Section.js
 *
 * Renders a Content Section with styles and props
 */

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

const getHeight = props => {
  let height;

  if (props.height === 'md') {
    height = '30rem';
  } else if (props.height === 'lg') {
    height = '50rem';
  } else {
    height = null;
  }
  return height;
};

const FlexGridSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  height: ${props => getHeight(props)};
  min-height: 30rem;

  border: 2px solid red;

  @media screen and (min-width: ${props => props.gridStart}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
  }
`;

FlexGridSection.defaultProps = {
  gridStart: '1023px',
  align: 'stretch',
  justify: 'center',
};

const GridSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 30rem;

  @media screen and (min-width: ${props => props.gridStart}) {
    display: grid;
    grid-gap: ${props => props.gap};
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    grid-auto-flow: row dense;
    list-style: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    max-width: 120rem;
    overflow: hidden;
  }
`;

GridSection.defaultProps = {
  gap: '8px',
  gridStart: '760px',
};

class Section extends Component {
  render() {
    const {
      bgColor,
      bgImgLink,
      type,
      children,
      className,
      gridStart,
      gap,
      align,
      justify,
      height,
    } = this.props;
    const childrenBlocks = React.Children.map(children, child => {
      return React.cloneElement(child, {
        type: this.props.type,
      });
    });
    if (type === 'grid') {
      return (
        <GridSection
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          className={className}
          gap={gap}
          gridStart={gridStart}
        >
          {childrenBlocks}
        </GridSection>
      );
    } else {
      return (
        <FlexGridSection
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          className={className}
          gridStart={gridStart}
          align={align}
          justify={justify}
          height={height}
        >
          {childrenBlocks}
        </FlexGridSection>
      );
    }
  }
}

Section.defaultProps = {
  bgColor: 'neutral',
  type: 'flex',
};

// END OF SECTION

/**
 *
 * Block.js
 *
 * Renders a Content Section with styles and props
 */

const FlexGridBlock = styled.div`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  flex-basis: ${props => props.basis + '%'};

  border: 3px solid blue;

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

class Block extends Component {
  render() {
    const {
      children,
      bgColor,
      flexBasis,
      gridSize,
      type,
      className,
      align,
      justify,
    } = this.props;

    if (type === 'grid') {
      return (
        <GridBlock bgColor={bgColor} size={gridSize} className={className}>
          {children}
        </GridBlock>
      );
    } else {
      return (
        <FlexGridBlock
          bgColor={bgColor}
          basis={flexBasis}
          align={align}
          justify={justify}
          className={className}
        >
          {children}
        </FlexGridBlock>
      );
    }
  }
}

Block.defaultProps = {
  bgColor: 'neutral',
  type: 'flex',
  flexBasis: '100',
  gridSize: 'md',
};

// END OF BLOCK

const CardBody = styled.div`
  .content {
    padding: 2rem;
  }
`;

export class Card extends Component {
  render() {
    const { imgSrc, children } = this.props;
    return (
      <CardBody>
        <Img src={imgSrc} alt="" className="img-fluid" />
        <div className="content">{children}</div>
      </CardBody>
    );
  }
}

class TestPage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - TestPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgColor="dark">
          <PageContainer>
            <Section>
              <Block flexBasis="50" align="center">
                <Paragraph>
                  <H1 light>Boost Your Operation</H1>
                  <H3 light>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </H3>
                </Paragraph>
              </Block>
              <Block flexBasis="50" align="flex-end" justify="center">
                <Img src="images/oil-rig.png" alt="" className="img-fluid" />
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* PRICING BLOCK  */}

        <SectionBackground bgColor="lightblue" className="pb-5">
          <PageContainer>
            <Block flexBasis="100">
              <Paragraph>
                <H1 className="text-center p-5">All For a Great Price</H1>
              </Paragraph>
            </Block>
            <Section>
              <Block flexBasis="50" className="text-center" align="stretch">
                <Paragraph bgColor="light" nopadding>
                  <Card imgSrc="https://picsum.photos/600/300?image=0">
                    <H3 className="mt-5">Starter</H3>
                    <P>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Placeat distinctio voluptates enim{' '}
                    </P>
                    <H1 color="red">$100</H1>

                    <P>First Feature</P>
                    <hr />
                    <P>Second Feature</P>
                    <hr />
                    <P>The Third Feature is Cool!</P>
                  </Card>
                </Paragraph>
              </Block>
              <Block
                flexBasis="50"
                className="text-center"
                verticalAlign="stretch"
              >
                <Paragraph bgColor="light" nopadding>
                  <Card imgSrc="https://picsum.photos/600/300?image=9">
                    <H3 className="mt-5">Enterprise</H3>
                    <P>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Placeat distinctio voluptates enim{' '}
                    </P>
                    <H1 color="red">Contact Us</H1>

                    <P>First Feature</P>
                    <hr />
                    <P>Second Feature</P>
                    <hr />
                    <P>The Third Feature is Cool!</P>
                    <hr />
                    <P>The Last Feature is to die for</P>
                  </Card>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default TestPage;
