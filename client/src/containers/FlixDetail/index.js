import React from 'react';
import Flix from '../../components/Flix/index.js';
import Header from '../../components/Header/index.js';
import api from '../../utils/api';
import qs from 'querystring';
import './index.css';

class FlixDetail extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    const itemName = document.getElementById('name').value;
    const itemCategory = document.getElementById('category').value;
    const form = document.getElementById('flixForm');

    if (itemName !== "" && itemCategory !== "") {
         api.post('flix', 
            qs.stringify({name: itemName, category: itemCategory}))
         .then(function (response) {
            console.log(response);
         });

      form.reset();
    }
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
