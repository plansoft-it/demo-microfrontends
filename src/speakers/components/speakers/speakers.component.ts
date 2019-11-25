import { speakerListMock } from './../../mocks/speaker-list.mock';

import { IComponentOptions, IComponentController, Injectable } from 'angular';
import * as html from './speakers.component.html';
import './speakers.component.scss';
import { ISpeaker } from '../../models/speaker';



export class SpeakersController implements IComponentController {

	private speakerList: ISpeaker[];
	private gitHubImageSrc: string;

	constructor() {
		this.speakerList = speakerListMock;

		this.gitHubImageSrc =`${window.location.origin}/images/GitHub-Mark-32px.png`;
	}

	$onInit(): void {
		
	}
}

export class SpeakersComponent implements IComponentOptions {
	public controller: Injectable<ng.IControllerConstructor>;
	public controllerAs: string;
	public template: string;
	constructor() {
		this.controller = SpeakersController;
		this.controllerAs = "$ctrl";
		this.template = html;
	}
}