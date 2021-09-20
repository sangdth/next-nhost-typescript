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
At your root project folder, run:
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
I have included `login` and `signup` pages, you can start using it. The `user` interface looks [like this](https://github.com/sangdth/next-nhost-typescript/blob/f0d4c61e99cb4d58ff494ca18fffb3bc7cab09e1/lib/types.ts#L83) if you have not change anything in PostgresQL so far.
- Login page: `http://localhost:3000/login`
- Signup page: `http://localhost:3000/signup`

# For Development
### Adding new component
We have `plop` to help making new component with predefined content.
```
yarn new:component

// Prompt will ask for component name
? Component name TestComponent
✔  ++ /components/TestComponent/index.ts
✔  ++ /components/TestComponent/TestComponent.tsx
✔  ++ /components/TestComponent/TestComponent.spec.tsx
✔  +- /components/index.ts
✨  Done in 3.02s.
```

# TODO
- [ ] Add Error Boundary and fall back view.
- [ ] Make an admin dashboard for demo.
- [ ] I don't know how to make a script like `yarn create next-app` flow to allow people customise something here. But well, feel free to suggest. I really appreciate.
