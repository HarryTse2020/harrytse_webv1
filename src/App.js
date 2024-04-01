import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Resume} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs /> */}
    <SpecialMenu />
    <Resume/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
