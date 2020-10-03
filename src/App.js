import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import BuildingData from "./pages/BuildingData/BuildingData";
import ExistingConditions from "./pages/ExistingConditions/ExistingConditions";
import ExistingGeometry from "./pages/ExistingGeometry/ExistingGeometry";
import FacadeConfig from "./pages/FacadeConfig/FacadeConfig";
import Overview from "./pages/Overview/Overview";
import Checkout from "./pages/Checkout/Checkout";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";

import { authenticate, logout } from "./redux/auth/auth.actions";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //uset to validate conditional routes render

  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  //extracting user from previously saved time in local storage
  useEffect(() => {
    const tryLogin = async () => {
      const userData = localStorage.getItem("userData");

      if (!userData) {
        dispatch(logout());
        setIsAuthenticated(false);
        return;
      }
      const transformedData = await JSON.parse(userData);
      const { userName, userId, token } = transformedData;

      dispatch(authenticate(userName, userId, token));
    };

    tryLogin();
  }, [dispatch]);

  //enabling conditional routes rendering
  useEffect(() => {
    if (user.isAuthenticated) {
      setIsAuthenticated(true);
      return;
    }
    setIsAuthenticated(false);
  }, [user]);

  //routes if not authenticated
  let routes = (
    <div>
      <Route path='/' component={SideNav} />
      <Route path='/' component={Header} />
      <Switch>
        <Route path='/login' component={Login} />
        {
          <Route
            exact
            path='/'
            render={() =>
              localStorage.getItem("userData") ? (
                <Route path='/' exact component={HomePage} />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
        }
        <Redirect to='/login' />
      </Switch>
    </div>
  );

  if (isAuthenticated) {
    routes = (
      <div>
        <Route path='/' component={SideNav} />
        <Route path='/' component={Header} />
        <Switch>
          {/* <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('userData') ? (
                <Route path="/" exact component={HomePage} />
              ) : (
                <Redirect to="/login" />
              )
            }
          /> */}
          <Route path='/' exact component={HomePage} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path='/building-data' component={BuildingData} />
          <Route
            path='/existing-building-conditions'
            component={ExistingConditions}
          />
          <Route
            path='/existing-building-geometry/:id'
            component={ExistingGeometry}
          />
          <Route
            path='/existing-building-geometry'
            component={ExistingGeometry}
          />
          <Route path='/facade' component={FacadeConfig} />
          <Route path='/overview' component={Overview} />
          <Route path='/checkout' component={Checkout} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }

  return <div className='App'>{routes}</div>;
}

export default App;
