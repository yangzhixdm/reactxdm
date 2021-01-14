import React from 'react'
import Info from './Info'
import Header from './header'
import axios from 'axios'
import './App.css'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'xx',
    };
  }

  async handler () {
    this.setState({
      text: 'hello'
    })

    let data = await axios({
      method: "get",
      url: '/login',
      data: {},
      transformRequest: [
        function (data) {
          let ret = "";
          for (let it in data) {
            ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      ],
      headers: {
          "x-csrf-token": "yRkctP726mNIhsph2hyI4SuS"
      }
    })

    console.log(data['data'])
  }

  render () {
    return <div className="page">
      <Header></Header>
      <Info></Info>
      { this.state.text }
      <button onClick={ () => { this.handler() }}>Test</button>
    </div>
  }
}

export default Hello;