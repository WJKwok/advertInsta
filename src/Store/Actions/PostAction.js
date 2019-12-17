import firebase from '../../Config/FirebaseConfig';

export const createPost = (postDetails) => {
  return (dispatch, getState) => {
    const email = getState().firebase.auth.email;
    firebase.firestore().collection('posts').add({
      user: email,
      imgUrl: postDetails.postImgUrl,
      title: postDetails.postTitle,
      content: postDetails.postContent,
      score: 1
    }).then(() => {
      dispatch({type: 'POST_SUCCESS'});
      window.location.reload(); //refreshes to show post
    }).catch((err) => {
      dispatch({type: 'POST_ERROR', error: err})
    })
  }
}

export const upVote = (id, score) => {
  return (dispatch, getState) => {
    const increment = firebase.firestore.FieldValue.increment(1);
    firebase.firestore().collection('posts').doc(id).update({
      score: increment,
    }).then(() => {
      dispatch({type: 'UPVOTE_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'UPVOTE_ERROR', error:err})
    })
  }
}

export const downVote = (id, score) => {
  return (dispatch, getState) => {
    const decrement = firebase.firestore.FieldValue.increment(-1);
    firebase.firestore().collection('posts').doc(id).update({
      score: decrement,
    }).then(() => {
      dispatch({type: 'DOWNVOTE_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'DOWNVOTE_ERROR', error:err})
    })
  }
}
