import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';

import ScrollToTop from './components/scrolltotop';

import Home from './components/pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/pages/about';
import Shop from './components/pages/shop';
import Editorial from './components/pages/editorial';
import Product from './components/pages/product';
import NotFound from './components/404';

function App() {
  return (
    <FadeIn>
    <Router>
    <ScrollToTop />
      <div className="App">
            <div className="promotion">
            </div>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={About} path="/about" />
          <Route component={Shop} path="/shop"/>
          <Route component={Editorial} path="/blog"/>
          <Route component={Product} path="/products/:product" />
          <Route component={NotFound} path="*" />
        </Switch>
        <Footer />
      </div>
    </Router>
    </FadeIn>
  );
}

export default App;
