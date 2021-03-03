import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useDispatch } from "react-redux";
import { restoreUser } from "./Store/session";
// import { SmoothProvider } from 'react-smooth-scrolling'



import CookingPromo from './components/CookingPromo'
import Nav from './components/Hamburger'
import Toast from './components/TopPage'
import ProfileIntro from './components/ProfileIntro'
import WeeklyTrends from './components/WeeklyTrends'
import LeaderBoards from './components/LeaderBoards'
import ContactInfo from './components/ContactInfo'
import PCaro from './components/Carousel';


import './App.css';

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
        {/* <SmoothProvider skew={false}> */}
        {authenticated && <Nav setAuthenticated={setAuthenticated} />}
        <Toast />
        <CookingPromo />
        <ProfileIntro />
        <WeeklyTrends />
        <LeaderBoards />
        <PCaro />
        <ContactInfo />

        <Switch>
          <Route path='/' exact={true}>
            {authenticated && <LandingPage />}
            {!authenticated && (
              <Splash
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            )}
          </Route>

          <ProtectedRoute path="/:username" exact={true} authenticated={authenticated}>
            <Profile />
          </ProtectedRoute>

          <Route path='/sign-up' exact={true}>
            <SignUpForm
              setAuthenticated={setAuthenticated}
            />
          </Route>

          <ProtectedRoute path='/users' exact={true} authenticated={authenticated}>
            <UsersList />
          </ProtectedRoute>

          <ProtectedRoute
            path='/users/:userId'
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>

          {/* <ProtectedRoute path='/' exact={true} authenticated={authenticated}>
            <h1>My Home Page</h1>
          </ProtectedRoute> */}
          <Route path="*">
            <h1 style={{ color: "white" }}>404</h1>
          </Route>

        </Switch>
        {/* </SmoothProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
