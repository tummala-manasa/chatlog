import React from 'react';
import { mount } from '../enzyme';

// Components
import MessageLogContainer from './index.js';
import Avatar from '../Avatar';
import Timestamp from '../Timestamp';

let mockArray = [
    {
        messageId: "testId",
        userId: "testUserId",
        fullName: "test name",
        email: "test@gmai.com",
        message: "test message",
        avatar: null,
        timestamp: new Date()
    },
    {
        messageId: "testId2",
        userId: "testUserId",
        fullName: "test name",
        email: "test@gmai.com",
        message: "test message",
        avatar: null,
        timestamp: new Date()
    }
];

test('Check if MessageLogContainer is rendered', () => {
    const MessageLogContainerWrap = mount(<MessageLogContainer logs={mockArray} />);
    const componentInstance = MessageLogContainerWrap.instance();

    //Accessing react lifecyle methods
    componentInstance.componentDidUpdate({ logs: [] });

    MessageLogContainerWrap.update();

    expect(MessageLogContainerWrap.find('li')).toHaveLength(2);
    expect(MessageLogContainerWrap.find('b')).toHaveLength(2);
    expect(MessageLogContainerWrap.find('.message')).toHaveLength(2);
    expect(MessageLogContainerWrap.find(Avatar)).toHaveLength(2);
    expect(MessageLogContainerWrap.find(Timestamp)).toHaveLength(2);

    expect(MessageLogContainerWrap.find('.message').first().text()).toEqual('test message');
    expect(MessageLogContainerWrap.find('b').first().text()).toEqual('test name');

});
