import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Cities } from './components/cities/cities';
import { CityDetails } from './components/city-details/city-details';

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/cities/:id" component={CityDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
