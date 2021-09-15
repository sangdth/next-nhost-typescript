# next-nhost-typescript template

Strong opinionated starter template for NextJS

# Features
- [x] NextJS v11
- [x] Prepare for Nhost
- [x] All in TypeScript
- [x] Chakra UI
- [x] ESLint with Airbnb style
- [x] Apollo GraphQL (provided from Nhost)
- [x] Jotai for state management

# How to use

### 0. Make sure you have
- Docker and Docker compose up and running. I have no idea how Docker works so please Google.
- Yarn installed globally already. You can change to npm with zero problem, but remember to change package.json scripts.

### 1. Create a Nhost project
It's simple, just follow [this video](https://www.youtube.com/watch?v=v3I5_2t1cco) from `00:00:44 - 00:01:57` or simply head to [nhost.io console](https://console.nhost.io/) if you already know.

### 2. Clone this template
You can manually clone it or use the green button [Use this template](https://github.com/sangdth/next-nhost-typescript/generate) in GitHub.

### 3. Install `nhost` CLI and login
```
npm install -g nhost
```

When you have `nhost`, login by
```
nhost login
```
Read more at [login docs](https://docs.nhost.io/cli/login).

### 4. Link your project to local
At your root folder, run:
```
nhost link
```
Then select your project to link. Read more at [link docs](https://docs.nhost.io/cli/link)

### 5. Install dependencies and start the development
```
yarn install
# then
yarn dev
```
- Frontend will run at `http://localhost:3000`
- Backend will run at `http://localhost:9001`
- GraphQL endpoint is: `http://localhost:8080/v1/graphql`

### 6. Enjoy!

# TODO
I don't know how to make a script like `yarn create next-app` flow to allow people customise something here. But well, feel free to suggest. I really appreciate.
