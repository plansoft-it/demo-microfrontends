export class HomeComponent extends HTMLElement {

	render() {
		return `
						<div class="container">
							<div class="row">
								<h4 class="light center">
									Plansoft: demo micro frontends
								</h4>
								<img src="images/bricks.jpg" class="responsive-img" />
								<p class="caption">
									Progetto sviluppato con single-spa, per ulteriori informazioni visitate la <a href="https://github.com/CanopyTax/single-spa" target="_blank">pagina Github</a>.
								</p>
							</div>
						</div>
		`;
	}

	connectedCallback() {
		this.innerHTML = this.render();
	}
}

window.customElements.define('home-component', HomeComponent);
