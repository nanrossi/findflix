import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
            [e.target.name]: e.target.value,
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
                            name="name" 
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
                            name="category"
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
                            { 
                                this.state._id === 0 ? 
                                'Add Flix' : 
                                'Edit Flix' 
                            }
                        </Button>
                    </div>
                </form>

                <Snackbar 
                    open={this.props.toast}
                    autoHideDuration={6000} 
                    onClose={this.props.handleClose}  
                    message={this.props.message}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            onClick={this.props.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            </Card>
        )
    }
}

export default Flix;