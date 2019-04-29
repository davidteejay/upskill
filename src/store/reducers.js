import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/modules/home'
import { NewsReducer as news } from '../routes/News/modules/news'
import { SigninReducer as signin } from '../routes/Signin/modules/signin'
import { SignupReducer as signup } from '../routes/Signup/modules/signup'

const makeRouteReducer = () => {
	return combineReducers({
		home,
		news,
		signin,
		signup
	})
}

export default makeRouteReducer;
