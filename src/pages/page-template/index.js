import React from 'react';
import { Layout } from 'components/layout';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  A,
  Img,
  PageContainer,
  Section,
  Block,
  Paragraph,
  SectionBackground,
} from 'components/general';

class PageTemplate extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - PageTemplate"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgColor="dark">
          <PageContainer>
            <Section>
              <Block flexflexBasis="100" className="text-center">
                <Paragraph>
                  <H1 light>Our Mission</H1>
                  <H3 light>
                    To help the industrial sector thrive through the application
                    of data-driven processes and cutting-edge AI technologies.
                  </H3>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default PageTemplate;
