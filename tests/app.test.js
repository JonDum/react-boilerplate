import React from 'react';
import { mount } from 'enzyme';

import App from '../src/app.js';

describe('app', () => {
	it('renders', () => {
		mount(<App />);
	});
});
