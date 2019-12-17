import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp, signIn } from '../../Store/Actions/AuthAction';

class AuthCard extends Component {

  state = {
    signIn: true,
    email: '',
    password: ''
  }

  signInTabClicked = () => {
    if (!this.state.signIn) {
      this.setState({
        signIn: true,
        email: '',
        password: ''
      })
    }
  }

  signUpTabClicked = () => {
    if (this.state.signIn) {
      this.setState({
        signIn: false,
        email: '',
        password: ''
      })
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  signInHandler = () => {
    this.props.signIn(this.state);
    console.log(this.state, 'signIn');
    this.setState({
      email:'',
      password:''
    })
  }

  signUpHandler = () => {
    this.props.signUp(this.state);
    console.log(this.state, 'signUp');
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return(
      <div>
        <div className='card clearfix'>
          <div className='row'>
            <div onClick={this.signInTabClicked} className={this.state.signIn ? 'col s6 center' : 'col s6 center grey white-text'}>
              <p>Sign In</p>
            </div>
            <div onClick={this.signUpTabClicked} className={this.state.signIn ? 'col s6 center grey white-text' : 'col s6 center'}>
              <p>Sign Up</p>
            </div>
          </div>
          <div className='card-content'>
            <input onChange={this.onChangeHandler} value={this.state.email} placeholder="email" id="email" type="text" autoComplete='off'/>
            <input onChange={this.onChangeHandler} value={this.state.password} placeholder="password" id="password" type="password" autoComplete='off'/>
            <div className='clearfix'>
              <button onClick={this.state.signIn ? this.signInHandler : this.signUpHandler} className='right red btn-small'>{this.state.signIn ? 'Sign In' : 'Sign Up'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(null, mapDispatchToProps)(AuthCard);
