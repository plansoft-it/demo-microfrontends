import React, { Component } from 'react'
import { Link } from 'react-router'


class Dashboard extends Component {
  render() {
    const { workshops } = this.props

    return (
      <div>
			
        <h2 className="row center">Workshops</h2>
        <p className="row center">
          I workshops attualmente programmati da Plansoft
        </p>
     
			<div className="row">
				{workshops.map(this.renderWorkshop)}
			</div>
		
      </div>
    )
	}
	navigateTo(url) {
		 window.history.pushState(null, null, url);
	}

	renderWorkshop(workshop) {
		return (
			<div className="col s12 m6 offset-m3" key={workshop.title}>
			<div className="card horizontal">
				<div className="card-image">
					<img src={`${window.location.origin}/${workshop.img}`} style={{width: 300, height: 300, objectFit: 'contain', display: 'block', padding: 20}}/>
				</div>
				<div className="card-stacked">
					<div className="card-content">
						<span className="card-title">{workshop.title}</span>
						<p>{workshop.description}</p>
					</div>
					<div className="card-action">
						<a href={`/workshops/workshop/${workshop.title}`} className="right">Vai al dettaglio</a>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Dashboard
