import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div style={{display: "flex"}}>
          <svg width="300" height="300">
            <circle/>
            Sorry, your browser does not support inline SVG.
          </svg>
          <sphere/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

/*
----displaying svg---

*/