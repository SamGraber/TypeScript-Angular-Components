import { Component, Input } from '@angular/core';

import { ContainerHeaderTemplate } from '../templates/containerHeader.template';
import { CardSearchComponent } from './cardSearch/cardSearch';
import { PageSizeComponent } from '../paging/pageSize/pageSize';
import { FilterTagsComponent } from './filterTags/filterTags.component';

@Component({
	selector: 'rlContainerHeader',
	template: require('./containerHeader.component.html'),
	directives: [CardSearchComponent, PageSizeComponent, FilterTagsComponent],
})
export class ContainerHeaderComponent {
	@Input() header: ContainerHeaderTemplate;
	@Input() showFilterTags: boolean;

	constructor() {
		this.showFilterTags = false;
	}
}
