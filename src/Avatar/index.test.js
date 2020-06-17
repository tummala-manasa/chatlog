import React from 'react';
import { mount } from '../enzyme';

// Components
import Avatar from './index.js'

test('Check if empty comnponent is rendered', () => {
    const AvatarWrap = mount(<Avatar email="test@gmail.com" />);

    expect(AvatarWrap.find('img')).toHaveLength(0);
});

test('Check if image is rendered', () => {
    const AvatarWrap = mount(<Avatar email="test@gmail.com" url="http://dummyimage.com/100x100.png/5fa2dd/ffffff" />);

    expect(AvatarWrap.find('.img-wrap')).toHaveLength(1);
    expect(AvatarWrap.find('img')).toHaveLength(1);
    expect(AvatarWrap.find('.mail')).toHaveLength(1);

    expect(AvatarWrap.find('img').prop('src')).toEqual("http://dummyimage.com/100x100.png/5fa2dd/ffffff");
    expect(AvatarWrap.find('.mail').text()).toEqual('test@gmail.com');
});
