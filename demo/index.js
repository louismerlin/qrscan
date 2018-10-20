import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import QRScan from '../QRScan'

class Demo extends Component {
  
  constructor (props) {
    super(props)
    this.state = { value: '', watching: false }
    this.onFind = this.onFind.bind(this)
  }
  
  onFind (value) {
    this.setState({ value, watching: false })
  }
  
  render () {
    return (
      <Fragment>
        <h1>QRScan Demo</h1>
        {this.state.watching
          ? (
            <QRScan onFind={this.onFind} />
          )
          : (
            <Fragment>
              <button onClick={() => this.setState({ watching: true })}>Scan</button>
              <h4>value: {this.state.value}</h4>
            </Fragment>
          )
        }
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
)