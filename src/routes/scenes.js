import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Loading from '../components/Preloader'

const newHistory = createBrowserHistory()

const Home = React.lazy(() => import('./Home/containers/'))
const News = React.lazy(() => import('./News/containers/'))
const Signin = React.lazy(() => import('./Signin/containers/'))
const Signup = React.lazy(() => import('./Signup/containers/'))
const About = React.lazy(() =>import ('./About/components/'))

const routes = [
  { path: '/', component: Home, key: 'Home' },
  { path: '/news', component: News, key: 'News' },
  { path: '/signin', component: Signin, key: 'Signin' },
  { path: '/signup', component: Signup, key: 'Signup' },
  { path: '/about', component: About, key: 'About' },
]

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading/>}>
        <Router history={newHistory}>
          <Switch>
            {routes.map(route => {
              return <Route exact path={route.path} key={route.key} component={route.component}/>
            })}
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
