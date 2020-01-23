import React from 'react';
import Flix from '../../components/Flix/index.js';
import Header from '../../components/Header/index.js';
import api from '../../utils/api';
import qs from 'querystring';
import './index.css';

class EditFlix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: 0,
      name: '',
      category: ''
    }

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if(id) {
      api.get('flix/' + id)
      .then(response => response.data)
      .then(data => {
          this.setState(data);
      });
    }
  }

  submit(e, flix) {
    const { _id, name, category } = flix;

    if (name !== '' && category !== '') {
        if(_id !== 0) {
          api.put('flix/' + _id, 
            qs.stringify({
              _id: _id, 
              name: name,
              category: category
            })
          );
        } 
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

export default EditFlix;
