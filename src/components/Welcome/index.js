import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {nameBtn: false}

  isSubscribe = () => {
    const {nameBtn} = this.state
    this.setState(() => ({
      nameBtn: !nameBtn,
    }))
  }

  render() {
    const {nameBtn} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="about-heading">Thank you! Happy learing</p>
        <button className="button" type="button" onClick={this.isSubscribe}>
          {nameBtn}
        </button>
        {nameBtn ? Subscribed : Subscribe}
      </div>
    )
  }
}
export default Welcome
