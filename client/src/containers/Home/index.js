import React from 'react';
import List from '../../components/List/index.js';
import Header from '../../components/Header/index.js';
import './index.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Movie 1",
        "Movie 2",
        "Movie 3"
      ]
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    if (newItem.value !== "") {
      list.push(newItem.value);
      this.setState({
        list: list
      });

      newItem.classList.remove("is-danger");
      form.reset();
    } else {

      newItem.classList.add("is-danger");
    }
  }

  removeItem(item) {
    const list = this.state.list.slice();
    list.some((el, i) => {
      if (el === item) {
        list.splice(i, 1);
        return true;
      }
      return false;
    });

    this.setState({
      list: list
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
