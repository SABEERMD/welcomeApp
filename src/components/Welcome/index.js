import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="about-heading">Thank you! Happy learing</p>
        <button className="button" type="button" onClick={this.isSubscribe}>
          Subscribe
        </button>
      </div>
    )
  }
}
export default Welcome
