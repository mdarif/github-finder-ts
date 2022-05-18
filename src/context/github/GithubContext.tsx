import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

type GithubContextDefaultType = {
  users: any[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
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
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
