import React, { Component } from 'react'
import Header from './Header'
import FbButton from './FbButton'

class App extends Component {
  state = { like: 0, dislike: 0 }
  render() {
    return(
      <div>
      <Header/>
      <h4>Like : {this.state.like}</h4>
      <h4>Dislike : {this.state.dislike}</h4>

      < FbButton handleClick={this.onLike} caption="Like" />
      < FbButton handleClick={this.onDisLike} caption="Dislike" />
      </div>
    )
  }

  onLike = () = {
    this.setState({ like: this.state.like + 1})
  }

  onDisLike = () = {
    this.setState({ Dislike: this.state.dislike + 1})
  }
}

export default App
