import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      number: 0,
      color: 'text-primary'
    }
  }

  setColor() {
    this.setState({
      color: (this.state.number > 0) ? 'text-success' : (this.state.number < 0) ? 'text-danger' : 'text-primary'
    })
  }

  increase() {
    this.setState({
      number: this.state.number + 1
    }, () => this.setColor())
  }

  decrease() {
    this.setState({
      number: this.state.number - 1
    }, () => this.setColor())
  }

  render() {
    return (
      <div className="container">
        <p className="display-4 my-3">Number Operations</p>
        <hr />

        <div className="d-flex justify-content-start align-items-center">
          <button className="btn btn-primary bi bi-dash-lg" onClick={() => this.decrease()}></button>
          <span className={this.state.color + ' lead mx-2'}>{this.state.number}</span>
          <button className="btn btn-primary bi bi-plus-lg" onClick={() => this.increase()}></button>
        </div>
      </div>
    )
  }

}

export default App
