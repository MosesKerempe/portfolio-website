import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './components/Timeline';
import Skills from './pages/Skills';
import Projects from './pages/Projects'; // Import the Projects page
import Contact from './pages/Contact'; // Import the Contact page

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} /> {/* Add Projects route */}
            <Route path="/contact" component={Contact} /> {/* Add Contact route */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;