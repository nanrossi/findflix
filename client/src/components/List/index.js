import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }
    
    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.props.items;
            
            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }

        this.setState({
            filtered: newList
        });
    }

    render() {
        return (
            <div>
                <Paper component="form" className="search" >
                    <InputBase
                        type="search"
                        className="search-input"
                        placeholder="Search By Name..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={this.handleChange} 
                    />
                    <IconButton 
                         className="search-button"
                         type="submit" 
                         aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <div>
                    {this.state.filtered.map(item => (
                            <Card key={item._id} id={item._id} variant="outlined" className="card">
                                <Link to={'/flix/' + item._id}>
                                    <CardContent>
                                        <Typography className="title" color="textSecondary" gutterBottom>
                                            {item.name}
                                        </Typography>
                                            {item.category}
                                    </CardContent> 
                                </Link>
                                <CardActions>
                                    <Button
                                        className="delete"
                                        onClick={() => this.props.delete(item)}
                                    > 
                                        Delete 
                                    </Button>
                                </CardActions>
                            </Card>
                    ))}
                </div>
            </div>
        )
    }
}

export default List;
