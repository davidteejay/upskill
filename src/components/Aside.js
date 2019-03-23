import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Aside extends Component {
	constructor(props){
		super(props)

		this.state = {
			sectors: ['Education', 'Security', 'Health', 'Agriculture', 'Infrasctructure', 'Power', 'Banking and Finance', 'Legal Issues', 'Telecommunication', 'Transportation']
		}
	}
	render(){
		return (
			<div className="aside col s12 m4">
				{window.location.hash.includes('reports') && <div style={{ height: 30 }}/>}
				<div className="content shadowed">
					<h5>Report Categories</h5>
					{this.state.sectors.map((sector, i) => {
						return <p key={i}>
							<Link to={`/sector/${sector.toLowerCase().replace(/ /g, '-')}`}>
								{sector}
							</Link>
						</p>
					})}
				</div>
				{/* <div className="content shadowed"></div> */}
			</div>
		)
	}
}
