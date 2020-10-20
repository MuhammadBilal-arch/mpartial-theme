import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { VideoSection } from './components/VideoSection/VideoSection'
import { Nav } from './components/Nav/Nav'
import { HowItWork } from './components/HowItWork/HowItWork'
import { Form } from './components/Contact/Form'
import { Footer } from './components/Footer/Footer'
import { FeeStructure } from './components/FeeStructure/FeeStructure'
import { ExampleDelieverables } from './components/ExampleDelieverables/ExampleDelieverables'
import { login } from './components/Login/login'

function App() {

  const [navColor, setnavColor] = useState(false)
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setnavColor(true)
      }
      else {
        setnavColor(false)
      }
    });
  }, [navColor]);

  return (
    <div className="App">
      <Nav NavState={navColor} />
      <Switch>
        <Route exact path='/'>
          <VideoSection />
          <HowItWork />
          <FeeStructure />
          <ExampleDelieverables />
          <Form />
          <Footer />
        </Route>

        <Route path='/login' component={login} />
      </Switch>

    </div>
  );
}

export default App;
