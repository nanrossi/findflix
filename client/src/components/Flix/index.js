import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
            <Card className="form-card">
                <form className="form" id="flixForm">
                    <div>
                        <TextField 
                            required 
                            id="name" 
                            label="Flix Name" 
                            className="input"
                            placeholder="Flix Name..."
                            onChange={this.handleChange}
                            value={this.state.name || '' }
                        />
                    </div>
                    <div>
                        <TextField
                            id="category"
                            select
                            label="Category"
                            value={this.state.category || 'Movie'}
                            onChange={this.handleChange}
                        >
                            {this.validCategories.map(category => (
                                <MenuItem 
                                    key={category} 
                                    value={category}>
                                        {category}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <Button 
                            onClick={this.submit}
                            variant="contained"
                            className="button"
                        >
                            { this.state._id === 0 ? 'Add Flix' : 'Edit Flix' }
                        </Button>
                    </div>
                </form>
            </Card>
        )
    }
}

export default Flix;