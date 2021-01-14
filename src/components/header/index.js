import React from 'react'
import './header.css'
import { Input, Button } from 'antd'

class Header extends React.Component {

  state = {
    text: 'xx',
  }

  handler () {
    console.log('hello')
    console.log(this.state.text)
    this.setState({
      text: 'fdfdffs'
    })

    setTimeout(() => {
      console.log(this.state.text)
    })
  }

  render () {
    return (
      <div className="header">
        <p className="header__title">fdfdf</p>
        <div style={{width: "200px"}}>
          <Input style={{ "marginRight": "10px" }} placeholder="哈哈哈"/>
          <Button type="primary" onClick={ () => { this.handler() }}>hello</Button>
          <span>{ this.state.text }</span>
        </div>
      </div>
    )
  }
}

export default Header;