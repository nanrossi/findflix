import React from 'react';
import List from '../../components/List/index.js';
import Header from '../../components/Header/index.js';
import api from '../../utils/api';
import './index.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.refreshFlixList();
  }

  refreshFlixList() {
    this.flixList = api.get('flix')
        .then(response => response.data)
        .then(data => {
            this.setState({ 
                list: data
            });
        });
  }

  removeItem(item) {
    api.delete('flix/' + item._id)
    .then(() => {
      this.refreshFlixList();
    });
  }

  render() {
    return (
      <div className="container">
          <Header />
          <List 
            items={this.state.list} 
            delete={this.removeItem} 
          />
      </div>
    )
  }
}

export default Home;
