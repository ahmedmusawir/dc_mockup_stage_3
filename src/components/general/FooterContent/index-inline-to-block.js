import React from 'react';
import {
  H4,
  H5,
  A,
  Img,
  InlineList,
  Section,
  Block,
  SectionBackground,
  PageContainer,
  Paragraph,
} from 'components/general';

export const FooterContent = () => {
  return (
    <SectionBackground bgColor="gradient">
      <PageContainer>
        <Section>
          <Block className="text-center">
            <Paragraph>
              <Section>
                <Block nopadding flexBasis="33%">
                  <A href="https://www.facebook.com/DeepCastAI" target="_blank">
                    <Img src="/images/facebook.png" className="px-" alt="" />
                  </A>
                </Block>
                <Block nopadding flexBasis="33%">
                  <A
                    href="https://www.linkedin.com/company/deepcastai"
                    target="_blank"
                  >
                    <Img src="/images/linkedin.png" className="px-" alt="" />
                  </A>
                </Block>
                <Block nopadding flexBasis="33%">
                  <A
                    href="https://www.youtube.com/channel/UCsHk7ru4pxb_CdYPTuVf6_g"
                    target="_blank"
                  >
                    <Img src="/images/youtube.png" className="px-" alt="" />
                  </A>
                </Block>
              </Section>
              <A
                href="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
                target="_blank"
                data-content="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
                data-type="external"
              >
                <H4 light className="text-center">
                  800 Town and Country Blvd, STE 300,&nbsp;Houston, TX 77024
                </H4>
              </A>

              <Section>
                <Block flexBasis="20" nopadding>
                  <A
                    className="text-center"
                    href="tel:18335003282"
                    data-content="18335003282"
                    data-type="phone"
                  >
                    +1 (833) 500-DATA
                  </A>
                </Block>
                <Block flexBasis="10" nopadding>
                  <A
                    className="px-"
                    data-auto-recognition="true"
                    data-content="info@deepcast.ai"
                    href="mailto:info@deepcast.ai"
                    data-type="mail"
                  >
                    info@deepcast.ai
                  </A>
                </Block>
              </Section>
              <H5 light>Copyright © 2018 DeepCast LLC</H5>
            </Paragraph>
          </Block>
        </Section>
      </PageContainer>
    </SectionBackground>
  );
};

export default FooterContent;
