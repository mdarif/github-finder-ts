type ACTIONTYPE =
  | { type: 'GET_USERS'; payload: object }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'GET_USER'; payload: object }
  | { type: 'GET_REPOS'; payload: object }
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
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
