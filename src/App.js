import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Qrscanner from './components/Qrscanner';
import auth from './components/firebase/fire';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';

function App() {
  //states
  const [user, setUser] = useState(null);

  //useEffects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/qrscanner" exact component={Qrscanner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
