import { combineReducers } from 'redux'

import { HomeReducer as home } from '../routes/Home/modules/home'
import { NewsReducer as news } from '../routes/News/modules/news'
import { SigninReducer as signin } from '../routes/Signin/modules/signin'
import { SignupReducer as signup } from '../routes/Signup/modules/signup'
import { ExploreReducer as explore } from '../routes/Explore/modules/explore'
import { HubReducer as hub } from '../routes/SkillHub/modules/hub'
import { ProfileReducer as profile } from '../routes/Profile/modules/profile'
import { TestimoniesReducer as testimonies } from '../routes/Testimonies/modules/testimonies'
import { PartnerReducer as partner } from '../routes/Partner/modules/partner'

const makeRouteReducer = () => {
	return combineReducers({
		home,
		news,
		signin,
		signup,
		explore,
		hub,
		profile,
		testimonies,
		partner
	})
}

export default makeRouteReducer;
