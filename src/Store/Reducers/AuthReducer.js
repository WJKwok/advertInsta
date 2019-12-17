const initState = {
  errorMsg: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      console.log('SignUp Success!')
      return {
        ...state,
        errorMsg: null
      }
    case 'SIGNUP_ERROR':
      console.log('SignUp Error', action.error)
      return {
        ...state,
        errorMsg: 'SignUp Failed'
      }
    case 'SIGNIN_SUCCESS':
      console.log('SignIn Success!')
      return {
        ...state,
        errorMsg: null
      }
    case 'SIGNIN_ERROR':
      console.log('SignIn Failed', action.error)
      return {
        ...state,
        errorMsg: 'SignIn Failed'
      }
    case 'SIGNOUT_SUCCESS':
      console.log('SignOut Success!')
      return {
        ...state,
        errorMsg: null
      }
    case 'SIGNOUT_ERROR':
      console.log('SignOut Failed', action.error)
      return {
        ...state,
        errorMsg: 'SignOut Failed'
      }
    default:
      return state
  }
}

export default authReducer;
