import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './login.scss';
import * as actions from '../../redux/actions';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }
    onSubmitLogin(){
        this.props.userLoginRequest({email: 'infiniticoder@gmail.com', password: '1nf1n1tyc0d3r5'});
    }
    render(){
      console.log(this.props);
        return(
            <div>
              <h1>hey I am in login</h1>
              <button onClick={() => this.onSubmitLogin()} >Submit </button>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
