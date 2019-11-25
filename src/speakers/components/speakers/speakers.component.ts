import { speakerListMock } from './../../mocks/speaker-list.mock';

import { IComponentOptions, IComponentController, Injectable } from 'angular';
import * as html from './speakers.component.html';
import './speakers.component.scss';
import { ISpeaker } from '../../models/speaker';



export class SpeakersController implements IComponentController {

	private speakerList: ISpeaker[];
	private gitHubImageSrc: string;

	$onInit(): void {
		this.speakerList = speakerListMock;
		this.gitHubImageSrc =`${window.location.origin}/images/GitHub-Mark-32px.png`;
	}

}

export const SpeakerComponent: IComponentOptions = {
	controller: SpeakersController,
	controllerAs: '$ctrl',
	template: html
};
