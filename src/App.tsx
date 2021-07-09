import {Redirect, Route, useHistory} from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, {useState} from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Pages
import Home from './pages/Home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {

  // var mysql = require('mysql');
  // var connection = mysql.createConnection({
  //   host: 'bidb-1.cersv7izojaw.us-west-2.rds.amazonaws.com',
  //   user: 'admin',
  //   password: '9dofFksYJgKpSRXU6eBe',
  //   port:3306
  // });

  // connection.connect(function (err:any) {
  //   if (err) {
  //     console.error('error connecting: ' + err.stack);
  //     return;
  //   }

  //   console.log('connected as id ' + connection.threadId);
  // });

  return (
    <IonApp> 
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dashboard/:id" component={Dashboard} exact={true} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;