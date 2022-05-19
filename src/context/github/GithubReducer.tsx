type ACTIONTYPE =
  | { type: 'GET_USERS'; payload: object }
  | { type: 'SET_LOADING'; payload: boolean }
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
    default:
      return state;
  }
};

export default githubReducer;
