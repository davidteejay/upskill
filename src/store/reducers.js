import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/modules/home'
import { NewsReducer as news } from '../routes/News/modules/news'

const makeRouteReducer = () => {
    return combineReducers({
        home,
        news
    })
}

export default makeRouteReducer;
