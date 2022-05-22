import { createContext, useReducer, ReactElement } from 'react';
import githubReducer from './GithubReducer';

export type UserType = {
  id?: number;
  name?: string;
  type?: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  login?: string;
  html_url?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;
  hireable?: boolean;
};

export type RepoType = {
  id?: number;
  name?: string;
  description?: string;
  html_url?: string;
  forks?: number;
  open_issues?: number;
  watchers_count?: number;
  stargazers_count?: number;
  children: ReactElement | ReactElement[];
};

export type ReposType = RepoType[];

type GithubContextDefaultType = {
  users: any[];
  loading: boolean;
  user: UserType;
  repos: ReposType;
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
  getUser: (username: string) => Promise<void>;
  getUserRepos: (login: string) => Promise<void>;
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
    user: {},
    repos: [],
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

  // Get single user
  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location.href = '/notfound';
    } else {
      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // Get user repos
  const getUserRepos = async (login: string) => {
    setLoading();

    /**
     * The URLSearchParams interface defines utility methods to work with the query string of a URL
     */
    const params = new URLSearchParams({
      sort: 'created',
      // per_page: '10',
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
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
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
