import React from 'react';
import SearchInput from '../SearchInput';
import FlixCard from '../FlixCard';
import './index.css';


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
                <SearchInput handleChange={this.handleChange}/>
                <div>
                    {this.state.filtered.map(item => (
                        <FlixCard 
                            key={item._id} 
                            item={item}
                            delete={this.props.delete} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default List;
