import React, { Component } from 'react'

export default class Aside extends Component {
	render(){
		return (
			<div className="aside col s12 m4">
				{window.location.hash.includes('reports') && <div style={{ height: 30 }}/>}
				<div className="content shadowed"></div>
				<div className="content shadowed"></div>
			</div>
		)
	}
}
