import Vue from 'vue';
import './frameworks.component.scss';
import { frameworkListMock } from './mocks/framework-list.mock';

export const FrameworksComponent = {
	template: `
		<div class="container framework-list">
			<div class="row">
				<h2 class="header center">Framework utilizzati</h2>
			</div>
			
			<div class="row">
				<div v-for="framework in frameworks" class="col s12 m3">
					<div class="card">
						<div class="card-image">
							<img v-bind:src=framework.logo>
						</div>
						<div class="card-content">
								<span class="card-title">{{ framework.name }}</span>
								<p>{{ framework.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,

	data:() => ({
			frameworks: frameworkListMock
	})
};
