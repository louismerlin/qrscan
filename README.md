# qrscan
QR scanner for React

See a simple demo [here](https://louismerlin.github.io/qrscan/).

## Installation and usage

First, install the component from npm.

```
yarn add qrscan
```

Then, use it in your app.

```javascript
import React, { Component } from 'react'
import QRScan from 'qrscan'

class App extends Component {
  
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
```

### Props

The QRScan component takes as props:
- `onFind` - subscribe to qr code detection
