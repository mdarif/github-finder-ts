import axios from 'axios';
import { UserAndReposType, UsersType } from './GithubContext';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { 
    Authorization: `token ${GITHUB_TOKEN}`,
   }
})

  // Get search results
  export const searchUsers = async (text: string): Promise<UsersType> => {

    /**
     * The URLSearchParams interface defines utility methods to work with the query string of a URL
     */
    const params = new URLSearchParams({
      q: text,
    });

    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
 
  };

  // Get user and repos
  export const getUserAndRepos = async (login: string): Promise<UserAndReposType> => {
    const [ user, repos ] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?sort=created&per_page=10`),
    ])

    return {
      user: user.data,
      repos: repos.data,
    }
  }