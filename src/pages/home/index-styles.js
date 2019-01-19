import React from 'react';
import Layout from 'components/layout/Layout';
import styled from 'styled-components';
import {
  Img,
  Col,
  Row,
  Container,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  A,
} from 'components/general';

const BtnStyled = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 50px;
  padding: 1rem 2rem;
`;

const Styles = () => (
  <Layout
    title="Deep Cast - Styles"
    description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
  >
    <Container className="mb-5 pb-5">
      <Row>
        <Img src="https://video-react.js.org/assets/logo.png" alt="DeepCast" />
        <Col sm="12" md="12" lg="12">
          <H1>This is a test of h1</H1>
          <H2>This is a test of h2 Tag</H2>
          <H3>This is a test of h3 Tag</H3>
          <H4>This is a test of h4 Tag</H4>
          <H5>This is a test of h5 Tag</H5>
          <H6>This is a test of h6 Tag</H6>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12" lg="12">
          <P>
            This is a test of p Tag. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </P>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12" lg="12">
          <A href="#!">This is a test of a Tag</A>
        </Col>
      </Row>
      <Row>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="primary">Primary BtnStyled</BtnStyled>
        </Col>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="secondary">Secondary BtnStyled</BtnStyled>
        </Col>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="success">Success BtnStyled</BtnStyled>
        </Col>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="warning">Warning BtnStyled</BtnStyled>
        </Col>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="info">Info BtnStyled</BtnStyled>
        </Col>
        <Col sm="6" md="4" lg="3">
          <BtnStyled color="danger">Danger BtnStyled</BtnStyled>
        </Col>
      </Row>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>
          .col-sm-6 .order-sm-2 .offset-sm-1
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          .col-sm-12 .col-md-6 .offset-md-3
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>
  </Layout>
);

export default Styles;
