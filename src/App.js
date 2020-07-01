import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { modules } from './utils';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {this.props.sign === 'Sign out' && this.props.user.permissions
                ? modules.map(({ path, component }) => (
                    <Route key={path} path={path}>
                      {component}
                    </Route>
                  ))
                : null}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ sign, user }) => ({
  sign,
  user
});

export default connect(mapStateToProps)(App);

// export default App;
