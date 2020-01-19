import React from 'react';
import './index.css';

class Header extends React.Component {
    render() {
        return(
            <header>
                <div>
                    FindFlix
                </div>
                <div>
                    Consultar Flix
                </div>
                <div>
                    Adicionar Flix
                </div>
                <div>
                    Logout
                </div>
          </header>
        )
    }
}

export default Header;