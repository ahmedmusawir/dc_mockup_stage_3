import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import {
  H1,
  H2,
  H3,
  PageContainer,
  Section,
  Block,
  BlogTile,
} from 'components/general';

const PageBackground = styled.div`
  display: block;
  background: url('/images/media-page-bg.jpg') fixed;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

class Media extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Media Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <PageBackground>
          <PageContainer>
            <Block>
              <H1 light>Media</H1>
            </Block>
            <Section type="grid" className="mb-5">
              <Block gridSize="lg" nopadding>
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-1.jpg">
                    <H2 light>This is Post 1 Title</H2>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-2.jpg">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-3.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-4.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-5.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-6.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-7.png">
                    <H3 light>This is a really really long Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-8.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
              <Block gridSize="sm">
                <Link to="/article">
                  <BlogTile bgImg="/images/blog/cover-9.png">
                    <H3 light>This is Post 2 Title</H3>
                    <aside />
                  </BlogTile>
                </Link>
              </Block>
            </Section>
          </PageContainer>
        </PageBackground>
      </Layout>
    );
  }
}

export default Media;
