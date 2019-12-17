import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../Store/Actions/AuthAction';
import { createPost } from '../../Store/Actions/PostAction';

class SignedInCard extends Component {

  state = {
    createClicked: false,
    postImgUrl: '',
    postTitle: '',
    postContent: ''
  }

  createPostToggle = () => {
    if (this.state.createClicked) {
      this.setState({
        createClicked: false
      })
    } else {
      this.setState({
        createClicked: true
      })
    }

  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitHandler = () => {
    this.props.createPost(this.state);
    this.setState({
      createClicked: false,
      postImgUrl: '',
      postTitle: '',
      postContent: ''
    })
  }

  signOutHandler = () => {
    this.props.signOut();
    console.log('Bye');
  }


  render() {
    const createButton = (
      <div onClick={this.createPostToggle} className='red card pointer-cursor'>
        <p className='center white-text post-button'>+ Create Offer</p>
      </div>
    )

    const createCard = (
      <div className='card'>
        <div className='card-content'>
          <i onClick={this.createPostToggle} className='right material-icons pointer-cursor'>clear</i>
          <input onChange={this.changeHandler} placeholder="Image URL" id="postImgUrl" type="text"/>
          <input onChange={this.changeHandler} placeholder="Title" id="postTitle" type="text"/>
          <textarea  onChange={this.changeHandler} placeholder="Content" id="postContent" className="materialize-textarea"></textarea>
          <div className='clearfix'>
            <button onClick={this.submitHandler} className='right red btn-small'>Post</button>
          </div>
        </div>
      </div>
    )

    return(
      <div>
        <div className='card'>
          <div className='h-align'>
            <img src='/images/user_head.png'/>
            <p className='padding-left'>{this.props.userName}</p>
          </div>
          <div className='card-action'>
            <a className='pointer-cursor' onClick={this.signOutHandler}>Sign Out</a>
          </div>
        </div>
        {this.state.createClicked ? createCard : createButton}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    createPost: (postDetails) => dispatch(createPost(postDetails))
  }
}

export default connect(null, mapDispatchToProps)(SignedInCard);
