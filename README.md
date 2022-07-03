<h1 align="center">Welcome to Github Finder 👋</h1>
<p>
  <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/arif_iq" target="_blank">
    <img alt="Twitter: arif_iq" src="https://img.shields.io/twitter/follow/arif_iq.svg?style=social" />
  </a>
</p>

> An App to search users on Github and get their repositories and other information.

# Github Finder
An App to search users on Github and get their repositories and other information.

![API Gateway, Lambda and DynamoDB](./src/images/github-finder-shot.png)


## Stacks Used
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [GitHub Rest API](https://docs.github.com/en/rest)
- [daisyUI](https://daisyui.com/)
- [axios](https://axios-http.com/docs/intro)
- [Vercel](https://vercel.com/)


## Folder Structure

```
.
├── LICENSE
├── README.md
├── SECURITY.md
├── cypress
│   ├── e2e
│   │   └── spec.cy.ts
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── alert
│   │   ├── AlertContext.tsx
│   │   └── AlertReducer.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Alert.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── Spinner.jsx
│   │   │   └── assets
│   │   │       └── spinner.gif
│   │   ├── repos
│   │   │   ├── RepoItem.tsx
│   │   │   └── RepoList.tsx
│   │   └── users
│   │       ├── UserItem.tsx
│   │       ├── UserResults.tsx
│   │       └── UserSearch.tsx
│   ├── context
│   │   └── github
│   │       ├── GithubActions.ts
│   │       ├── GithubContext.tsx
│   │       └── GithubReducer.tsx
│   ├── images
│   │   └── github-finder-shot.png
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   └── User.tsx
│   └── react-app-env.d.ts
├── tailwind.config.js
└── tsconfig.json
```

## Vercel Deployment

- https://github-finder-ts.vercel.app/