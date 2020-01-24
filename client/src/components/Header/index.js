import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuItens: [
                { name: "FindFlix",  url:"/"},
                { name: "Consultar Flix",  url:"/flix"},
                { name: "Adicionar Flix",  url:"/flix/create"},
                { name: "Logout",  url:"/logout"},
            ]
        }
    }

    render() {
        return(
            <header>
				{this.state.menuItens.map(item => {
						return (
                                <div 
                                    key={item.name} 
                                    className='menu-item'
                                >
									<Link 
										to={item.url}>
										{item.name}
									</Link>
								</div>
							)
						}
					)
				}
            </header>
        )
    }
}

export default Header;