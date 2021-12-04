import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import axios from 'axios'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Frontend = React.lazy(() => import('./layout/Frontend'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
// token
const Token = 'abcd'
const apiUrl = 'http://olev2.herokuapp.com/api'
axios.interceptors.request.use(
  config => {
    config.headers.authorization ='Bearer $(Token)'
    return config;
  },
  error =>{
    return Promise.reject(error);
  }
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/admin" name="Admin" render={(props) => <DefaultLayout {...props} />} />
            <Route path="/" name="OLE" render={(props) => <Frontend {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

export default App
