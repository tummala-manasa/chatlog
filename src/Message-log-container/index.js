import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Timestamp from '../Timestamp';
import './index.css';

class MessageLogContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            unloadedLogs: [],
            loadedLogs: []
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.logs !== this.props.logs) {
            this.loadLogs(this.props.logs);
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let unloadedLogs = this.state.unloadedLogs;
        let lastLog = document.getElementsByClassName('last-log'); // this class identifies when to trigger next load 
        if (lastLog[0] && lastLog[0].getBoundingClientRect().top <= window.innerHeight) {
            if (unloadedLogs.length === 0) { // once all logs are loaded, we don't need this event
                window.removeEventListener('scroll', this.handleScroll);
            } else {
                this.loadLogs(unloadedLogs); // as it reaches the trigger, we load next set
            }
        }
    }
    loadLogs(logs) {
        let firstTen = logs.slice(0, 10); // we load 10 logs each time
        let otherLogs = logs.slice(10);
        let loadedLogs = [...this.state.loadedLogs, ...firstTen];
        let unloadedLogs = [...otherLogs];
        this.setState({ loadedLogs, unloadedLogs });
    }

    render() {
        let { loadedLogs } = this.state;
        let lastIndex = loadedLogs.length - 3; // buffer to load
        let currentLogs = loadedLogs.map((log, index) => (
            <li key={log.messageId} className={lastIndex === index ? 'last-log' : ''}>
                <Avatar url={log.avatar} email={log.email} />
                <section className="details">
                    <b>{log.fullName}</b>
                    <p className="message">{log.message}</p>
                    <Timestamp timestamp={log.timestamp} />
                </section>
            </li>
        ))
        return (
            <ul>
                {currentLogs}
            </ul>
        );
    }
}
MessageLogContainer.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.shape({
        messageId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        email: PropTypes.string,
        message: PropTypes.string,
        avatar: PropTypes.string,
    }))
};
export default MessageLogContainer;