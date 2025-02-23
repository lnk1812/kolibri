import { h } from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { executeTests } from 'stencil-awesome-test';
import { Props } from '../component';
import { getPopoverHtml } from './html.mock';

executeTests<Props>(
	'Popover',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-popover {...props} />,
		});
		return page;
	},
	{
		_alignment: ['top', 'right', 'bottom', 'left'],
	},
	getPopoverHtml,
	{
		execMode: 'default', // ready
	}
);
