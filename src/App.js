import React from 'react';
import MessageLogContainer from './Message-log-container';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { messageLog: [] };
  }

  fetchData(type) {
    return fetch(`http://localhost:3001/${type}`)
      .then(response => response.json())
  }

  getConsolidatedData(memberResponse, messageResponse) {
    return messageResponse.map(message => {
      let member = memberResponse.find(member => member.id === message.userId); // find the member
      return {
        messageId: message.id,
        message: message.message,
        timestamp: new Date(message.timestamp),
        userId: message.userId,
        fullName: `${member.firstName} ${member.lastName}`,
        email: member.email,
        avatar: member.avatar
      }
    })
  }

  componentDidMount() {
    let memberRequest = this.fetchData('members');
    let messageRequest = this.fetchData('messages');

    Promise.all([memberRequest, messageRequest]) // Fecth all the data
      .then(([memberResponse, messageResponse]) => {
        let consolidatedArray = this.getConsolidatedData(memberResponse, messageResponse);
        let sortedData = consolidatedArray.sort(({ timestamp: t1 }, { timestamp: t2 }) => { // Sort - recent to old
          if (t1 === t2) return 0;
          return t1 > t2 ? -1 : 1;
        })
        this.setState({ messageLog: sortedData });
      })
      .catch(data => console.log(data))
  }

  render() {
    return <MessageLogContainer logs={this.state.messageLog} />;
  }
}
export default App;