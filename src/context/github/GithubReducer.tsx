type ACTIONTYPE = { type: 'GET_USERS'; payload: object };
// | { type: 'decrement'; payload: string };

const githubReducer = (state: any, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
