import React, { Component } from 'react';
import { isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

import firebase from '../../Config/FirebaseConfig';

import PostCardV2 from '../PostCard/PostCardV2';
import AuthCard from '../Auth/AuthCard';
import SignedInCard from '../Auth/SignedInCard';


class Dashboard extends Component {

  state = {
    postList: [],
  }

  async componentDidMount() {
    let list = [];
    await firebase.firestore()
    .collection('posts').orderBy('score', 'desc')
    .get().then((snapshot) => {
      snapshot.forEach(doc => {
        const data = doc.data();
        list.push({
          id: doc.id,
          score: data.score,
          imgUrl: data.imgUrl,
          title: data.title,
          content: data.content})
      })
    })
    this.setState({
      postList: list
    })
  }

  render() {

    const { auth } = this.props;
    const postList = this.state.postList && this.state.postList.map(post => {
      return(
        <PostCardV2 key={post.id}
        post={post}
        upVoted={()=>this.props.upVote(post.id, post.score)}/>
      );
    })

    if(!isLoaded(auth)) {
      var rightBar = <p>Loading</p>
    } else {
      if (!auth.uid) {
        rightBar = <AuthCard/>
      } else {
        rightBar = <SignedInCard userName={auth.email}/>
      }
    }

    return(
      <div className='container'>
        <div className='row'>
          <div className='col s8'>
            {postList}
          </div>
          <div className='col s4 sticky'>
            <div className='card center red'>
              <img className='home-logo' src='/images/kaufda_transparent.svg'/>
            </div>
            {rightBar}
          </div>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
