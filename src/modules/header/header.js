import React from 'react'
import './header.scss'

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <p className="textHeading">{this.props.heading}</p>
                </div>
            </div>
        );
    }
}

export default Header;
