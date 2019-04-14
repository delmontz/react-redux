import React, { Component } from 'react';

import NumLabel from 'components/NumLabel'
import Button from '@material-ui/core/Button';

import 'pages/Home.css'

export default class Home extends Component {

  constructor(props) {
    super(props); 
    this.state = { 
      num: 0
    };

    this.add = this.add.bind(this);
  }
  
  add() {
    this.setState({
      num: this.state.num + 1
    });
  };

  render() {
    return (
      <div className="app">
        <h1>カウントアップ</h1>
        <NumLabel num={this.state.num}/>
        <Button onClick={ this.add } variant="outlined" color="secondary">
          ポチッとな
        </Button>
      </div>
    );
  }
}
