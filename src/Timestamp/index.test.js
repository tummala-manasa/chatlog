import React from 'react';
import { mount } from '../enzyme';

// Components
import Timestamp from './index.js'

test('Check if Timestamp is rendered', () => {
    const TimestampWrap = mount(<Timestamp timestamp={new Date()} />);

    expect(TimestampWrap.find('.time')).toHaveLength(1);
    expect(TimestampWrap.find('i')).toHaveLength(1);
});
