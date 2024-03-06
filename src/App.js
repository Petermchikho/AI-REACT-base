import React from 'react';
import {Footer,Blog,Header,Possibility,What,Features} from "./containers";
import {Cta,Brand,Navbar} from "./componets";
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
//rafce