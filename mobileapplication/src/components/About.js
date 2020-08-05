import React from 'react'
import data from '../data/data.json'

export default function About(props){
	let information=data.details[props.location.data1.id]
	console.log(information)
	return(
		<div className="row justify-content-center">
			<div className="col-lg-3 m-2">
				<div className="card">
					<div className="card-body">
						<h2>{information.mobile.name}</h2>
					</div>
				</div>
			</div>
			<div className="col-lg-8 mt-2 ">
				<div className="card">
					<div className="card-body">
						<h2>Overview:</h2>
						<hr />
						<p>{information.overview}</p>
					</div>
				</div>
			</div>	
		</div>
		);
}