import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { PageNotFound } from './components/page-not-found/page-not-found';
import {Cities} from './components/cities/cities';

const App = () => {

  const handleSearchClick = () => {
    console.log('trigger search');
  }

  return (
    <main>
      <Router>
        <Header handleSearchClick={handleSearchClick} />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cities">
              <Cities />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
