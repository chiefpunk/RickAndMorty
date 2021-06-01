import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};



export default App;
