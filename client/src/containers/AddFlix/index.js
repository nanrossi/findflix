import React from 'react';
import Flix from '../../components/Flix/index.js';
import Header from '../../components/Header/index.js';
import api from '../../utils/api';
import qs from 'querystring';
import './index.css';

class AddFlix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: 0,
      name: '',
      category: 'Movie'
    }

    this.submit = this.submit.bind(this);
  }

  submit(e, flix) {
    const {name, category } = flix;

    if (name !== '' && category !== '') {          
      api.post('flix', 
        qs.stringify({
          name: name, 
          category: category
        })
      );
      
      this.props.history.push('/flix');
    }
  }

  render() {
    return (
      <div className="container">
            <Header />
            <Flix 
              createOrUpdate={this.createOrUpdate}
              data={this.state}
              submit={this.submit}
            />
      </div>
    )
  }
}

export default AddFlix;
