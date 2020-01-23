import React from 'react';
import './index.css';

class Flix extends React.Component {
    constructor(props) {
        super(props);
        
        this.validCategories = ['Movie', 'Series', 'Other'];

        this.state = props.data;


        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.data);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(nextProps.data);
    }
    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    submit(e) {
        e.preventDefault();
        this.props.submit(e, this.state);
    }

    render() {
        return(
            <form className="form" id="flixForm">
                <input
                    type="text"
                    className="input"
                    id="name"
                    placeholder="Flix Name..."
                    onChange={this.handleChange}
                    value={this.state.name || ''}
                />
                <select 
                    id="category"
                    value={this.state.category || 'Movie'}
                    onChange={this.handleChange}
                >
                    {this.validCategories.map((category) => 
                        <option
                            key={category} 
                            value={category} 
                        >
                            {category}
                        </option>  
                    )}
                </select>
                <button 
                    onClick={this.submit}
                >
                    { this.state._id === 0 ? 'Add Flix' : 'Edit Flix' } 
                </button>
          </form>
        )
    }
}

export default Flix;