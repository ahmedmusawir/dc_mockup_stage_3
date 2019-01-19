import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components/layout';
import {
  H2,
  H5,
  P,
  Img,
  PageContainer,
  Section,
  Block,
  Paragraph,
  SectionBackground,
} from 'components/general';

const getColor = props => {
  let color;
  if (props.light) {
    color = props.theme.colors.text.light;
  } else {
    color = props.theme.colors.text.dark;
  }
  return color;
};
const UL = styled.ul`
  // border: 1px solid red;
  padding-left: 2.5rem;
`;
const LI = styled.li`
  font-family: ${props => props.theme.font.family.secondaryFontFamily};
  font-size: ${props => props.theme.font.groups.xs.size};
  font-variant: ${props => props.theme.font.groups.xs.variant};
  transform: ${props => props.theme.font.groups.xs.transform};
  padding: ${props => props.theme.font.groups.xs.padding};
  line-height: ${props => props.theme.font.groups.xs.height};
  color: ${props => getColor(props)};
  margin: 0.25rem;
`;

class Article extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Page Template"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgColor="light">
          <PageContainer>
            <Section>
              <Block>
                <Paragraph>
                  <H2 bold>
                    Scaling and Securing Your Data with Microservices
                  </H2>
                  <H5 italic>September 20, 2017 | Arturo Klie</H5>
                </Paragraph>
              </Block>
              <Block>
                <Paragraph>
                  <P>
                    A common concern in the Oil and Gas industry is how to
                    optimize cost, maintain security, and increase agility.
                    Additionally, many firms are currently looking into
                    leveraging data analytics as a way to expose new business
                    opportunities, and gain a competitive edge.
                  </P>
                  <P>
                    In order to deliver accurate and hasty analytics solutions,
                    a robust platform is needed. Fortunately, there are many
                    learnings we can capture from the tech industry to help
                    solve this problem. One such topic is the concept of
                    microservices. In this article, we will go over what
                    microservices are and how they can enable us to run a more
                    nimble data-driven business.
                  </P>
                  <P>
                    Services are essentially standalone programs that run on a
                    computer or server, and microservices are a miniaturization
                    of services. Large application like Google Search have
                    thousands of such services running in the background. They
                    are usually designed to communicate with other services or
                    client apps (i.e. your browser, mobile apps, or desktop
                    apps) via an API (Application Programming Interface). Some
                    examples of services in Oil and Gas may include SQL
                    databases, ETL platforms, BI platforms, among other things.
                    Fig. 1 below provides a visual reference for the anatomy of
                    a Service-Oriented Architectures (SOA), and will be used as
                    a reference for other illustrations later on.
                  </P>
                </Paragraph>
              </Block>
              <Block>
                <Paragraph className="text-center">
                  <Img
                    src="images/article5/fig1.png"
                    alt=""
                    className="img-fluid"
                    caption="Figure 1: Anatomy of a Service-Oriented Architecture."
                  />
                </Paragraph>
              </Block>
              <Block>
                <Paragraph>
                  <P>
                    In the 90’s and early 2000’s, many tech companies
                    implemented their SOA follow a common pattern:
                  </P>
                  <UL>
                    <LI>
                      First, companies would build a simple service usually
                      integrated with a relational database (Fig. 2.A). For
                      instance, a simple eCommerce website that sells books.
                    </LI>
                    <LI>
                      As compute and storage requirements increased, and more
                      resources were added, companies would often scale hardware
                      vertically by upgrading the CPU, RAM, or hard drives (Fig.
                      2.B). At this point, a “monolithic” service is born.
                    </LI>
                    <LI>
                      Once the hardware is unable to continue scaling
                      vertically, usually the next step would be to scale
                      horizontally by adding more copies of the same machine and
                      patching the monolithic service with a way to synchronize
                      data across them (Fig. 2.C).
                    </LI>
                  </UL>
                </Paragraph>
              </Block>
              <Block>
                <Paragraph className="text-center">
                  <Img
                    src="images/article5/art5-fig2.png"
                    alt=""
                    className="img-fluid"
                    caption="Figure 2: Typical SOA architecture from tech companies in the 90’s and early 2000’s."
                  />
                </Paragraph>
              </Block>
              <Block>
                <Paragraph>
                  <P>
                    In order to deliver accurate and hasty analytics solutions,
                    a robust platform is needed. Fortunately, there are many
                    learnings we can capture from the tech industry to help
                    solve this problem. One such topic is the concept of
                    microservices. In this article, we will go over what
                    microservices are and how they can enable us to run a more
                    nimble data-driven business.
                  </P>
                  <P>
                    Services are essentially standalone programs that run on a
                    computer or server, and microservices are a miniaturization
                    of services. Large application like Google Search have
                    thousands of such services running in the background. They
                    are usually designed to communicate with other services or
                    client apps (i.e. your browser, mobile apps, or desktop
                    apps) via an API (Application Programming Interface). Some
                    examples of services in Oil and Gas may include SQL
                    databases, ETL platforms, BI platforms, among other things.
                    Fig. 1 below provides a visual reference for the anatomy of
                    a Service-Oriented Architectures (SOA), and will be used as
                    a reference for other illustrations later on.
                  </P>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default Article;
