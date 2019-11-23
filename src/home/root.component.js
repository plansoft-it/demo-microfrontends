import React from 'react';

export default class HomeRoot extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
			<div className="container">
				<div className="row">
					<h4 className="light center">
						Plansoft: demo micro frontends
					</h4>
					<img src="images/bricks.jpg" className="responsive-img" />
					<p className="caption">
						Progetto sviluppato con single- spa, per ulteriori informazioni visitate la <a href="https://github.com/CanopyTax/single-spa" target="_blank">pagina Github</a>.
						
					</p>
				</div>
			</div>
    );
  }

}
