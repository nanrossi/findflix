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
      flix: {
        _id: 0,
        name: '',
        category: 'Movie'
      },
      toast: false
    }

    this.submit = this.submit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
        toast: false
    });
};

  submit(e, flix) {
    const {name, category} = flix;

    if (name !== '' && category !== '') {          
      api.post('flix', 
        qs.stringify({
          name: name, 
          category: category
        })
      );
      
      this.setState({
        flix: flix,
        toast: true
      }, () => {
        document.getElementById('flixForm').reset();
      });
    }
  }

  render() {
    return (
      <div className="container">
            <Header />
            <Flix 
              createOrUpdate={this.createOrUpdate}
              handleClose={this.handleClose}
              data={this.state.flix}
              toast={this.state.toast}
              submit={this.submit}
              message="Flix created!"
            />
      </div>
    )
  }
}

export default AddFlix;
