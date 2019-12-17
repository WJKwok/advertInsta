import firebase from '../../Config/FirebaseConfig';

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'SIGNIN_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'SIGNIN_ERROR', error: err});
    })
  }
}

export const signUp = (credentials) => {
  return (dispatch, getState) => {
    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((resp) => {
      return firebase.firestore().collection('users').doc(resp.user.uid).set({
        email: credentials.email
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'SIGNUP_ERROR', error: err})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'SIGNOUT_ERROR', error: err})
    })
  }
}
