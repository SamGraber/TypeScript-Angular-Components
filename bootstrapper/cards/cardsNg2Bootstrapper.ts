import { Component } from '@angular/core';
import { mapValues, map, range } from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';

import { services } from 'typescript-angular-utilities';
import __date = services.date;
import __transform = services.transform;
import __timezone = services.timezone;
import __object = services.object;

import { CardContainerBuilderService, ICardContainerInstance } from '../../source/components/cardContainer/builder/index';
import {
	DateFilterOld,
	IFilterGroup,
	IModeFilterGroup,
	IRangeFilterGroup,
	SelectFilter,
} from '../../source/components/cardContainer/filters/index';

interface ICardItem {
	id: number;
	name: string;
	value: number;
}

const rangeLow: number = 1;
const rangeHigh: number = 101;
const items: ICardItem[] = map(range(rangeLow, rangeHigh), (num: number): ICardItem => {
	return {
		id: num,
		name: 'Item' + num,
		value: num,
	};
});

@Component({
	selector: 'tsCardsBootstrapper',
	template: require('./cardsNg2.html'),
})
export class CardsBootstrapper {
	alwaysOpen: boolean = false;
	builder: ICardContainerInstance;
	selectBuilder: ICardContainerInstance;
	searchBuilder: ICardContainerInstance;
	builderWithFilterGroups: ICardContainerInstance;
	builderWithSelectFilter: ICardContainerInstance;
	options: number[];
	dateFilter: DateFilterOld;
	modeFilterGroup: IModeFilterGroup<any>;
	rangeFilterGroup: IRangeFilterGroup<any>;
	disabledFilterGroup: IFilterGroup<any>;
	selectFilter: SelectFilter<any, any>;

	constructor(timezone: __timezone.TimezoneService
			, cardContainerBuilder: CardContainerBuilderService) {
		timezone.setCurrentTimezone('-05:00');

		this.options = [1, 2, 3, 4, 5];

		this.builder = this.setupCardContainer(cardContainerBuilder);
		this.selectBuilder = this.setupCardContainer(cardContainerBuilder);
		this.searchBuilder = this.setupCardContainer(cardContainerBuilder);
		this.builderWithFilterGroups = this.setupCardContainerWithFilterGroups(cardContainerBuilder);
		this.builderWithSelectFilter = this.setupCardContainerWithSelectFilter(cardContainerBuilder);

		// const searchFilter = this.builder.useSearch();
		// searchFilter.minSearchLength = 5;

		this.dateFilter = new DateFilterOld({
			type: 'dateFilter',
			valueSelector: 'date',
		}, __date.dateUtility, __transform.transform);

		this.dateFilter.subscribe(value => console.log(mapValues(value, date => date != null ? date.format(__date.defaultFormats.dateTimeFormat) : null)));
	}

	setupCardContainer(cardContainerBuilder: CardContainerBuilderService): ICardContainerInstance {
		const builder = cardContainerBuilder.getInstance({
			paging: true,
			search: true,
		});
		cardContainerBuilder.buildObservableDataSource(builder, Observable.of(items).delay(1000));
		cardContainerBuilder.addColumn(builder, {
			name: 'name',
			label: 'Name',
			size: 6,
			getValue: 'name',
		});
		cardContainerBuilder.addColumn(builder, {
			name: 'value',
			label: 'Value',
			size: 6,
			getValue: 'value',
		});
		return builder;
	}

	setupCardContainerWithFilterGroups(cardContainerBuilder: CardContainerBuilderService): ICardContainerInstance {
		const builder = cardContainerBuilder.getInstance({
			paging: true,
			search: true,
		});
		cardContainerBuilder.buildObservableDataSource(builder, Observable.of(items).delay(1000));
		cardContainerBuilder.addColumn(builder, {
			name: 'name',
			label: 'Name',
			size: 6,
			getValue: 'name',
		});
		cardContainerBuilder.addColumn(builder, {
			name: 'value',
			label: 'Value',
			size: 6,
			getValue: 'value',
			template: '<b>{{myItem.value}}</b>',
		});

		this.rangeFilterGroup = cardContainerBuilder.buildRangeFilterGroup(builder, {
			type: 'testRangeGroup',
			label: 'Range Filter Group',
			getValue: 'value',
			options: [
				{
					label: 'All',
				},
				{
					label: '5 - 10',
					highInclusive: 10,
					lowInclusive: 5,
				},
				{
					label: '< 5',
					highExclusive: 5,
				},
			],
		});

		this.modeFilterGroup = cardContainerBuilder.buildModeFilterGroup(builder, {
			type: 'testModeGroup',
			label: 'Mode Filter Group',
			getValue: 'value',
			options: [
				{
					label: 'All',
					displayAll: true,
				},
				{
					label: 'Value Equals 3',
					value: 3,
				},
				{
					label: 'Value Equals 10',
					value: 10,
				},
			],
		});

		this.disabledFilterGroup = cardContainerBuilder.buildFilterGroup(builder, {
			type: 'testGroup',
			label: 'Disabled Filter Group',
			options: [
				{
					label: 'Show',
					predicate: item => true,
					serialize: () => 'show',
				},
				{
					label: 'Hide',
					predicate: item => false,
					serialize: () => 'hide',
				},
			],
		});

		this.modeFilterGroup.serialize().skip(1).subscribe(value => console.log('mode filter change', value));
		this.rangeFilterGroup.serialize().skip(1).subscribe(value => console.log('range filter change', value));
		this.disabledFilterGroup.serialize().skip(1).subscribe(value => console.log('disabled filter change', value));

		return builder;
	}

	setupCardContainerWithSelectFilter(cardContainerBuilder: CardContainerBuilderService): ICardContainerInstance {
		const builder = cardContainerBuilder.getInstance({
			paging: true,
			search: true,
		});
		cardContainerBuilder.buildObservableDataSource(builder, Observable.of(items).delay(1000));
		cardContainerBuilder.addColumn(builder, {
			name: 'name',
			label: 'Name',
			size: 6,
			getValue: 'name',
		});
		cardContainerBuilder.addColumn(builder, {
			name: 'value',
			label: 'Value',
			size: 6,
			getValue: 'value',
			template: '<b>{{myItem.value}}</b>',
		});

		this.selectFilter = cardContainerBuilder.buildSelectFilter<any, any>(builder, {
			valueSelector: 'value',
		});

		this.selectFilter.serialize().subscribe(value => console.log('select filter change', value));

		return builder;
	}

	submitAsync: { (data: any): Promise<void> } = (data: any) => {
		return new Promise<void>((resolve: Function, reject: Function): void => {
			setTimeout(() => {
				console.log(data);
				resolve();
			}, 1000);
		});
	}
}
