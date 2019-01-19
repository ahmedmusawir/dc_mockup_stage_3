import React from 'react';
import Fade from 'react-reveal/Fade';
import { Layout } from 'components/layout';
import {
  H1,
  H2,
  H3,
  H4,
  P,
  Img,
  Button,
  Card,
  Section,
  Block,
  PageContainer,
  Paragraph,
  SectionBackground,
  Form,
  FormGroup,
  Input,
  HeaderTooltipBox,
} from 'components/general';

class Product extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        {/* TOP HERO SECTION */}
        <SectionBackground bgImgLink="/images/forecast-header.jpg" parallax>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade bottom cascade>
                    <H1 light>Expedite Field Analysis by 100x</H1>
                    <H3 light>
                      Some long subtitle text goes here. It would be a tagline
                      that describes the value of the software
                    </H3>
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <HeaderTooltipBox>
                  <Fade bottom cascade>
                    <H4 bold className="text-center mb-3">
                      API: 1234567890
                    </H4>
                    <P>Some Information</P>
                    <P>More Information</P>
                    <P>Some Extra Information</P>
                    <P>Last set of Information</P>
                  </Fade>
                </HeaderTooltipBox>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 1 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Img
                      src="images/product-graph-1.jpg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade bottom cascade>
                    <H2>Automatic Forecasting</H2>
                    <H4>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias dolores quia sit harum accusamus quaerat
                      repudiandae.
                    </H4>
                  </Fade>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 2 - Img Right */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade bottom cascade>
                    <H2>Quick Reservoir Insights</H2>
                    <H4>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias dolores quia sit harum accusamus quaerat
                      repudiandae.
                    </H4>
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Img
                      src="images/product-cut-off.jpg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </Fade>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* TEXT & IMAGE BLOCK 3 */}
        <SectionBackground>
          <PageContainer>
            <Section>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade>
                    <Img
                      src="images/product-graph-2.png"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </Fade>
                </Paragraph>
              </Block>
              <Block flexBasis="50">
                <Paragraph>
                  <Fade bottom cascade>
                    <H2>Automatic Forecasting</H2>
                    <H4>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias dolores quia sit harum accusamus quaerat
                      repudiandae.
                    </H4>
                  </Fade>
                </Paragraph>
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
                    <Fade bottom cascade>
                      <H3 className="mt-5">Starter</H3>
                      <P>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat distinctio voluptates enim{' '}
                      </P>
                      <H1 color="red">$100</H1>

                      <P>First Feature</P>
                      <hr />
                      <P>Second Feature</P>
                      <hr />
                      <P>The Third Feature is Cool!</P>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
              <Block flexBasis="50" className="text-center" align="stretch">
                <Paragraph bgColor="light" nopadding>
                  <Card imgSrc="https://picsum.photos/600/300?image=9">
                    <Fade bottom cascade>
                      <H3 className="mt-5">Enterprise</H3>
                      <P>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Placeat distinctio voluptates enim{' '}
                      </P>
                      <H1 color="red">Contact Us</H1>

                      <P>First Feature</P>
                      <hr />
                      <P>Second Feature</P>
                      <hr />
                      <P>The Third Feature is Cool!</P>
                      <hr />
                      <P>The Last Feature is to die for</P>
                    </Fade>
                  </Card>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>

        {/* FORM SECTION */}
        <SectionBackground bgColor="grey">
          <PageContainer>
            <Section>
              <Block flexBasis="100">
                <Paragraph className="text-center">
                  <Fade bottom cascade>
                    <H1>Subscribe Now!</H1>
                    <H3>
                      Sign up for our newsletter to get the latest product
                      announcements
                    </H3>
                    <Form className="col-md-6 mx-auto mt-3">
                      <FormGroup className="">
                        <Input
                          type="email"
                          name="email"
                          id="email-input"
                          placeholder="Your Email"
                          className="form-control"
                        />
                      </FormGroup>
                      <Button color="danger" className="btn-lg">
                        Submit
                      </Button>
                    </Form>
                  </Fade>
                </Paragraph>
              </Block>
            </Section>
          </PageContainer>
        </SectionBackground>
      </Layout>
    );
  }
}

export default Product;
