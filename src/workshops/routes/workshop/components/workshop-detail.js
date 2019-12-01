import React, { Component } from 'react'
import { workshops } from './../../../stubs/workshops';

class WorkshopDetail extends Component {
	render() {
		const { params } = this.props;

		const workshop = workshops.find(w => w.title === params.workshopTitle);

		return (
			<div>
				<h2 className="center">{workshop.title}</h2>
				<div className="row">
					<div className="col s12 m6 offset-m3 center">
						<img src={`${window.location.origin}/${workshop.img}`} className="responsive-img" style={{height: 300, width: 300, objectFit: 'contain'}} />
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6 offset-m3 center">
						<p>{workshop.description}</p>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = WorkshopDetail