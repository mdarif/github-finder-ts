import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

type GithubContextDefaultType = {
  users: any[];
  loading: boolean;
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
};

const GithubContext = createContext({} as GithubContextDefaultType);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

type GithubContextProps = {
  children: React.ReactNode;
};

export const GithubProvider = ({ children }: GithubContextProps) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search results
  const searchUsers = async (text: string) => {
    if (text === '') return;

    setLoading();

    /**
     * The URLSearchParams interface defines utility methods to work with the query string of a URL
     */
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Clear users from state
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
