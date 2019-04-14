import React from 'react'

export default ({ loading = true }) => {
	return (
		<div className={loading ? "preloader" : "preloader hide"}>
			<div className="center preloader-container">
				<span className="dot"></span>
				<span className="dot"></span>
				<span className="dot"></span>
			</div>
		</div>
	)
}
