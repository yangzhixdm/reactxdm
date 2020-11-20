import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'xx',
    };
  }

  handler () {
    this.setState({
      text: 'hello'
    })
  }

  render () {
    return <div>
      { this.state.text }
      <button onClick={ () => { this.handler() }}>Test</button>
    </div>
  }
}

export default Hello;