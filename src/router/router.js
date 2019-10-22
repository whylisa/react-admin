import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '../App.js'
import Login from '../views/login/login'
import HomeMain from '../views/home/homeMain'
import Home from '../views/home/home'

export default class IRouter extends React.Component {
	render() {
		return (
		  <HashRouter>
			  <App>
				  <Switch>
					   <Route path="/login" component={Login}/>
					   <Route path="/" render={()=> 
						   <HomeMain>
							   <Switch>
								    <Route path="/home" component={Home} />
							   </Switch>
						   </HomeMain>
						 }/>
				  </Switch>
			  </App>
		  </HashRouter>
		)
	}
}