import React from 'react'

const Preloader = ({ loading = false, backgroundColor = '#fff7', color }) => {
	const styles = {
		preloader: {
			backgroundColor,
			display: loading ? 'flex' : 'none',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'fixed',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			zIndex: 10000000
		}
	}

	return (
		<div className="preloader" style={styles.preloader}>
			<div className="preloader-wrapper big active">
				<div className="spinner-layer spinner-blue-only">
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div>
					<div className="gap-patch">
						<div className="circle"></div>
					</div>
					<div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Preloader
