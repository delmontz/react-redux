import React, { Component } from 'react';
import 'components/NumLabel.css'
// React.Component

class NumLabel extends Component {

  render() {

    return (
      <div>
        <h2 className="numlabel">{ this.props.num }</h2>
      </div>
    );
  }

}

export default NumLabel;