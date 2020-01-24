import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuItens: [
                { name: "Consultar Flix",  url:"/flix"},
                { name: "Adicionar Flix",  url:"/flix/create"}
            ]
        }
    }

    render() {
        return(
            <header>
                <div>
                    FindFlix
                </div>
				{this.state.menuItens.map(item => {
						return (
                            <Link 
                                key={item.name} 
                                to={item.url}
                            >
                                <div className='menu-item'>
									{item.name}
								</div>
							</Link>
							)
						}
					)
				}
            </header>
        )
    }
}

export default Header;