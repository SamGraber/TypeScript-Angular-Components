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
	activeFilters: ISerializableFilter<T>[];

	constructor(@Inject(forwardRef(() => CardContainerComponent)) cardContainer: CardContainerComponent<T>) {
		this.cardContainer = cardContainer;
		this.activeFilters = new Array<ISerializableFilter<T>>();
	}

	ngOnInit() {
		let displayableFilters = <ISerializableFilter<T>[]>this.cardContainer.filters.filter((f) => f instanceof SerializableFilter);

		displayableFilters.forEach((filter) => {
			let defaultValue = filter.defaultValue;
			filter.asObservable().subscribe((newValue) => {
				if (newValue && newValue != defaultValue) {
					if (!this.activeFilters.find((thisFilter) => thisFilter.type == filter.type)) {
						this.activeFilters.push(filter);
					}
				}
				else {
					let indexToRemove = this.activeFilters.indexOf(filter);
					if (indexToRemove > -1) {
						this.activeFilters.splice(indexToRemove, 1);
					}
				}
			});
		});
	}
}