const initState = {
  errorMsg: null
}

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      console.log('Post Success!');
      return state;
    case 'POST_ERROR' :
      console.log('Post Error', action.error)
      return state;
    case 'UPVOTE_SUCCESS':
      console.log('Upvote Success!')
      return state;
    case 'UPVOTE_ERROR':
      console.log('Upvote Error', action.error)
      return state;
    case 'DOWNVOTE_SUCCESS':
      console.log('Downvote Success!')
      return state;
    case 'DOWNVOTE_ERROR':
      console.log('Downvote Error', action.error)
      return state;
    default:
      return state;
  }
}

export default postReducer;
