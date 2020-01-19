import React from 'react';
import Flix from '../../components/Flix/index.js';
import './index.css';

class FlixDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
            <Header />
            <Flix add={this.addItem} />
      </div>
    )
  }
}

export default FlixDetail;
