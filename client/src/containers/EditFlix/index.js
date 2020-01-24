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
      flix: {
        _id: 0,
        name: '',
        category: 'Movie'
      },
      toast: false
    }

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if(id) {
      api.get('flix/' + id)
      .then(response => response.data)
      .then(data => {
          this.setState({
            flix: data
          });
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

          this.setState({
            flix: flix,
            toast: true
          });
        }
    }
  }

  render() {
    return (
      <div className="container">
            <Header />
            <Flix 
              createOrUpdate={this.createOrUpdate}
              data={this.state.flix}
              toast={this.state.toast}
              submit={this.submit}
              message="Flix updated!"
            />
      </div>
    )
  }
}

export default EditFlix;
