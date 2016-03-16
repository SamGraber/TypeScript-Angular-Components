// /// <reference path='../../../typings/node/node.d.ts' />

'use strict';

import * as angular from 'angular';
import * as _ from 'lodash';

import { services } from 'typescript-angular-utilities';
import __parentChild = services.parentChildBehavior;

import { ITypeaheadBehavior, IGetItemsParams } from '../typeahead/typeahead';

export let moduleName: string = 'rl.ui.components.typeaheadList';
export let componentName: string = 'rlTypeaheadList';
export let controllerName: string = 'TypeaheadListController';

export interface ITypeaheadListBindings {
	getItems: { (params?: IGetItemsParams): angular.IPromise<any> };
}

export class TypeaheadListController implements ITypeaheadListBindings {
	// bindings
	getItems: { (params?: IGetItemsParams): angular.IPromise<any> };

	typeaheadLink: __parentChild.IChild<ITypeaheadBehavior>;
	ngModel: angular.INgModelController;

	$onInit(): void {
		//TODO
	}

	loadItems(search?: string): angular.IPromise<any> {
	}

	add(item:any): void {
		//TODO
	}

	remove(item: any): void {
		//TODO
	}
}

let typeaheadList: angular.IComponentOptions = {
	require: { ngModel: 'ngModel' },
	template: require('./typeaheadList.html'),
	controller: controllerName,
	controllerAs: 'controller',
	bindings: {
		getItems: '&',
	},
};

angular.module(moduleName, [__parentChild.moduleName])
	.component(componentName, typeaheadList)
	.controller(controllerName, TypeaheadListController);
