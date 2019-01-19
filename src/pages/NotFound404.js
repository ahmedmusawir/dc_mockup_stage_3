import React from 'react';
import { Layout } from 'components/layout';

class NotFound404 extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <div className="text-center container">
          <i
            className="fa fa-exclamation-circle fa-5x mt-5 pt-5 text-danger"
            aria-hidden="true"
          />
          <h2>Nothing Found! Please Try Again ...</h2>
        </div>
      </Layout>
    );
  }
}

export default NotFound404;
