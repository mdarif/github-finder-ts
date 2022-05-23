type ACTIONTYPE =
  | { type: 'GET_USERS'; payload: object }
  | { type: 'SET_LOADING'; payload: boolean }
  | {
      type: 'GET_USER_AND_REPOS';
      payload: {
        user: object;
        repos: object[];
      };
    }
  | { type: 'CLEAR_USERS' };

const githubReducer = (state: any, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
