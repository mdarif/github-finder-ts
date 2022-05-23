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

export type UsersType = Array<UserType>;

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

export type UserAndReposType = {
  user: UserType;
  repos: ReposType;
};

export type GithubActionType = {
  type: string;
  payload?: any;
};

type GithubContextDefaultType = {
  users: any[];
  loading: boolean;
  user: UserType;
  repos: ReposType;
  // searchUsers: (text: string) => Promise<void>;
  // clearUsers: () => void;
  // getUser: (username: string) => Promise<void>;
  // getUserRepos: (login: string) => Promise<void>;
  dispatch: (action: GithubActionType) => void;
};

const GithubContext = createContext({} as GithubContextDefaultType);

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

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
