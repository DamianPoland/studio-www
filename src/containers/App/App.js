import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { auth } from '../../shared/fire'

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// constans
import { PRIVACY_POLICY_PERMISSION, IS_AUTH, USER_ID } from '../../shared/constans'

// components
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Offer from '../../components/Offer/Offer'
import Realizations from '../../components/Realizations/Realizations'
import Login from '../../components/Login/Login'
import Contact from '../../components/Contact/Contact'
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import Footer from '../../components/Footer/Footer'
import AlertPrivacy from '../../UI/AlertPrivacy/AlertPrivacy'



function App() {

  // auth status changed
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem(IS_AUTH, JSON.stringify(user))
        localStorage.setItem(USER_ID, user.uid)
      } else {
        localStorage.removeItem(IS_AUTH)
        localStorage.removeItem(USER_ID)

      }
    })
  }, [])

  // privacy policy permission
  const [permissionPrivacyPolicy, setPermissionPrivacyPolicy] = useState(true)

  useEffect(() => {
    const permissionForPrivacyPolicy = localStorage.getItem(PRIVACY_POLICY_PERMISSION)
    if (permissionForPrivacyPolicy !== "true") {
      setPermissionPrivacyPolicy(false)
    }
  }, [])

  const setPermission = () => {
    localStorage.setItem(PRIVACY_POLICY_PERMISSION, true)
    setPermissionPrivacyPolicy(true)
  }

  // aos
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])


  return (
    <BrowserRouter>
      <Nav path='/' />
      <Switch>
        <Route path='/home' render={props => <Home {...props} />} />
        <Route path='/about' render={props => <About {...props} />} />
        <Route path='/offer' render={props => <Offer {...props} />} />
        <Route path='/realizations' render={props => <Realizations {...props} />} />
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/contact' render={props => <Contact {...props} />} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Redirect to='/home' />
      </Switch>
      <Footer path='/' />
      {permissionPrivacyPolicy ? null : <Route path='/' render={props => <AlertPrivacy {...props} click={setPermission} />} />}
    </BrowserRouter>
  );
}

export default App;
