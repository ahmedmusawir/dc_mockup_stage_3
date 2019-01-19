import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/DeepCast/global';
import DeepCastTheme from 'components/theme/DeepCast';
import Home from 'pages/home';
import About from 'pages/about';
import Media from 'pages/media';
import Product from 'pages/product';
import Solutions from 'pages/solutions';
import Article from 'pages/article-single';
import Test from 'pages/test';
import SendGrid from 'pages/sendgrid';
import NotFound404 from 'pages/NotFound404';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DeepCastTheme}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/media" component={Media} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/solutions" component={Solutions} />
              <Route exact path="/article" component={Article} />
              <Route exact path="/sendgrid" component={SendGrid} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound404} />
            </Switch>
            <GlobalStyle />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
