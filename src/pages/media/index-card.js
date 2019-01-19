import React from 'react';
import styled from 'styled-components';
import { Layout, ContentSection, GridSection } from 'components/layout';
import { GridCard, GridBlock, Container, H1, H2 } from 'components/general';
import Fade from 'react-reveal/Fade';

const PageBackground = styled.div`
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
          <Container>
            <Fade>
              <ContentSection>
                <GridSection>
                  <GridBlock>
                    <H1 light>Media</H1>
                  </GridBlock>
                </GridSection>
                <GridSection>
                  <GridBlock size="lg" nopadding>
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum veritatis doloremque veniam fugiat sed dolor dicta sit quam, consequatur temporibus ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores. ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores."
                      link="/"
                      thumbnail="/images/blog/cover-1.jpg"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-2.jpg"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-3.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-4.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-5.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-6.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-10.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-8.png"
                    />
                  </GridBlock>
                  <GridBlock nopadding size="sm">
                    <GridCard
                      title="This is Post 1 Title"
                      description="Lorem ipsum dolor sit amet."
                      link="/"
                      thumbnail="/images/blog/cover-9.png"
                    />
                  </GridBlock>
                </GridSection>
              </ContentSection>
            </Fade>
          </Container>
        </PageBackground>
      </Layout>
    );
  }
}

export default Media;
