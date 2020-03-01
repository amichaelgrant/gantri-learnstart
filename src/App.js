import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/Home';
import StoriesPage from './pages/Stories';
import StoryPage from './pages/Story';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/stories" component={StoriesPage}/>
          <Route exact path="/stories/:id" component={StoryPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
