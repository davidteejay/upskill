import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Scenes from '../routes/scenes'

export default class AppContainer extends Component{
    render(){
        return (
            <div className="app">
                <Provider store={this.props.store}>
                    <Scenes/>
                </Provider>
            </div>
        )
    }
}
