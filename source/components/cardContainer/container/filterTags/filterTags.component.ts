import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { filters } from 'typescript-angular-utilities';
import ISerializableFilter = filters.ISerializableFilter;
import SerializableFilter = filters.SerializableFilter;

import { CardContainerComponent } from '../../cardContainer';

@Component({
	selector: 'rlFilterTags',
	template: require('./filterTags.html')
})
export class FilterTagsComponent<T> implements OnInit {
	cardContainer: CardContainerComponent<T>;
	displayableFilters: ISerializableFilter<T>[];

	constructor(@Inject(forwardRef(() => CardContainerComponent)) cardContainer: CardContainerComponent<T>) {
		this.cardContainer = cardContainer;
	}

	ngOnInit() {
		this.displayableFilters = <ISerializableFilter<T>[]>this.cardContainer.filters.filter((f) => f instanceof SerializableFilter);
	}
}