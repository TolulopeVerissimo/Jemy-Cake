import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { restoreUser } from "./Store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute.js";
import SignUpForm from "./components/auth/SignUpForm";
import UsersList from "./components/UsersList";
import User from "./components/User";


import Nav from './components/Nav'
import Toast from './components/Toast'
import CookingPromo from './components/CookingPromo'
import ProfileIntro from './components/ProfileIntro'
import WeeklyTrends from './components/WeeklyTrends'
import LeaderBoards from './components/LeaderBoards'
// import ContactInfo from './components/ContactInfo'
import PCaro from './components/Carousel';
// import NavTransitions from './components/NavTransitions';
import PersonalProfile from './components/PersonalProfile';

// import './App.css';
function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUser())
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Nav authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <Switch>

          <Route path='/' exact={true}>
            <Toast /> <CookingPromo />
            <ProfileIntro authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <WeeklyTrends />
            <PCaro />
            <LeaderBoards />
            {/* <ContactInfo /> */}
          </Route>

          {/* <ProtectedRoute path="/:username" exact={true} authenticated={authenticated}> */}
          {/* <ProtectedRoute path="/g" exact={true} authenticated={authenticated}>
            <PersonalProfile />
          </ProtectedRoute> */}
          <ProtectedRoute path="/profile/:id" exact={true} authenticated={authenticated}>
            <PersonalProfile />
          </ProtectedRoute>

          <Route path='/sign-up' exact={true}>
            <SignUpForm setAuthenticated={setAuthenticated} />
          </Route>

          <ProtectedRoute path='/users' exact={true} authenticated={authenticated}>
            <UsersList />
          </ProtectedRoute>

          <ProtectedRoute path='/users/:userId' exact={true} authenticated={authenticated}>
            <User />
          </ProtectedRoute>

          <Route path="*">
            <h1 style={{ color: "white" }}>404</h1>
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
