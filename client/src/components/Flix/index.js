import React from 'react';
import './index.css';

class Flix extends React.Component {
    render() {
        return(
            <form className="form" id="addItemForm">
                <input
                    type="text"
                    className="input"
                    id="addInput"
                    placeholder="Something that needs ot be done..."
                />
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