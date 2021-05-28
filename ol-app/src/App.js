import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage';
import Products from './pages/Products/Products';
// import Checkout from './pages/checkout';
// import Contact from './pages/contact';
// import AboutUs from './pages/aboutus';


// import Products from './pages/Products/product/Product';

// const backgroundImg = {
//   width: "fill",
//   height: "150vh",

//   backgroundImage: `url(${background})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",

//   // opacity: '0.08',
// };


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/products" component={Products} />
          {/* <Route exact path ="/checkout" component={Checkout} />
          <Route exact path ="/Contact" component={Contact} />
          <Route exact path ="/aboutus" component={AboutUs} /> */}
        </Switch>
      </div>
    </Router>

  )
}

export default App;
