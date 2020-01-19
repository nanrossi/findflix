import React from 'react';
import './index.css';

class Flix extends React.Component {
    render() {
        return(
            <form className="form" id="flixForm">
                <input
                    type="text"
                    className="input"
                    id="name"
                    placeholder="Flix Name..."
                />
                <select id="category">
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Other">Other</option>
                </select>
                <button 
                    className="button is-info" 
                    onClick={this.props.add}
                >
                    Add Item
                </button>
          </form>
        )
    }
}

export default Flix;