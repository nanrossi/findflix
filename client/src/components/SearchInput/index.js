import React from 'react';
import './index.css';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class SearchInput extends React.Component {
    render() {
      return(
        <Paper component="form" className="search" >
            <InputBase
                type="search"
                className="search-input"
                placeholder="Search By Name..."
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={this.props.handleChange} 
            />
            <IconButton 
                id="search-button"
                type="submit" 
                aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
      ); 
    }
}

export default SearchInput;