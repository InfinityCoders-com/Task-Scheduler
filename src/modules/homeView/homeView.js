import React from 'react'
import './homeView.scss'
import Header from '../header/header';

class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    login=(e)=>{
        e.preventDefault();
        this.props.router.push('/login');
    }
    render(){
      console.log(this.props);
        return(
            <div>
                <Header />
                <h1 className="heading" >HOME PAGE</h1><br/>
                <a className="login" onClick={this.login}>Login</a>
            </div>
        );
    }
}

export default HomeView;
