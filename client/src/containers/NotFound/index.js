import React from 'react';
import Header from '../../components/Header';
import './index.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
          <Header />
          <div>
             Page Not Found
          </div>
      </div>
    )
  }
}

export default NotFound;
