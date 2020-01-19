import React from 'react';
import Flix from '../../components/Flix/index.js';
import Header from '../../components/Header/index.js';
import './index.css';

class FlixDetail extends React.Component {
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
