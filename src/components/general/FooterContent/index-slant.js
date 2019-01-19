import React from 'react';
import styled from 'styled-components';
import { Section, ContentSection } from 'components/layout';
import {
  H4,
  H5,
  A,
  Img,
  Container,
  InlineList,
  Row,
  Col,
} from 'components/general';

const ContactInfoContainer = styled.div`
  @media screen and (min-width: 1200px) {
    padding-top: 2rem;
  }
`;

export const FooterContent = () => {
  return (
    <ContentSection bgColor="#002864">
      <ContactInfoContainer>
        <Container className="pt-5">
          <Row>
            <Col xs="12" sm="4">
              <H4 light>Contact Us</H4>
              <A
                className="px-2"
                href="tel:18335003282"
                data-content="18335003282"
                data-type="phone"
              >
                +1 (833) 500-3282
              </A>
              <br />
              <A
                className="px-2"
                data-auto-recognition="true"
                data-content="info@deepcast.ai"
                href="mailto:info@deepcast.ai"
                data-type="mail"
              >
                info@deepcast.ai
              </A>
            </Col>
            <Col xs="12" sm="4">
              <H4 light>Location</H4>
              <A
                href="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
                target="_blank"
                data-content="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
                data-type="external"
              >
                800 Town and Country Blvd,
                <br /> STE 300, <br />
                Houston, TX 77024
              </A>
            </Col>
          </Row>
        </Container>
      </ContactInfoContainer>
      <Section className="mt-3">
        <InlineList>
          <A href="https://www.facebook.com/DeepCastAI" target="_blank">
            <Img src="/images/facebook.png" className="px-2" alt="" />
          </A>
          <A href="https://www.linkedin.com/company/deepcastai" target="_blank">
            <Img src="/images/linkedin.png" className="px-2" alt="" />
          </A>
          <A
            href="https://www.youtube.com/channel/UCsHk7ru4pxb_CdYPTuVf6_g"
            target="_blank"
          >
            <Img src="/images/youtube.png" className="px-2" alt="" />
          </A>
        </InlineList>
      </Section>
      <H5 color="red" className="text-center pt-2">
        Copyright © 2018 DeepCast LLC
      </H5>
    </ContentSection>
  );
};

export default FooterContent;
