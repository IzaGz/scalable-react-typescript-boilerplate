![TypeScript](https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png)

# Scalable React TS Boilerplate [![Build Status](https://travis-ci.org/scalable-react/scalable-react-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/scalable-react/scalable-react-typescript-boilerplate)

Checkout [our website](https://scalable-react-ts-boilerplate.herokuapp.com/) for documentation and examples.

## Background Info

This project was initially inspired by the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate). It inherits the [Feature-First](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.8nerdsqhd) organizational pattern.

The main feature of this project is that it embraces [TypeScript](https://www.typescriptlang.org/) as its main language.  The reasons to use static types are plentiful, but if you need more convincing, check the resources section below.

## Getting Started
1. Clone the Repo
`git clone https://github.com/RyanCCollins/scalable-react-ts-boilerplate`

2. Install Dependencies
From the root of the project directory, run `yarn` if you have yarn installed globally.
--- or ---
`npm install`.

3. Start the Development Server
Run `npm run start` then browse http://localhost:1337 to see your running app.

## What is Feature First?
In most projects and frameworks, files are organized in a File type first fashion. For example, your tests exist in a test folder, your styles in a styles folder. This boilerplate takes a different approach.

We encourage encapsulation of features by asking that you organize each feature into the same folder. With React, this means that your containers and components exist in their own folders, along with literally every other file that pertains to that one component. Your actions, reducers, tests, styles, and everything else are all internal to the component they represent. By decoupling your features from the rest of your app, you set yourself up to reuse your UI components in future projects. You can thank us later!

Give it a try! We promise you will enjoy it.

## Styled Components
This project embraces [styled-components](https://github.com/styled-components/styled-components) as it's a fantastic way to style your React components.  

Check the components directory for examples.

## Full Stack
This boilerplate contains setup to quickly get started with a Full Stack application.  Within the `src/` directory, you will find a server and a client folder.

## File Tree Structure

### Client File Structure
```
src/client
├── apolloClient.ts
├── components
│   ├── Box
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── boxMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   ├── maps.ts
│   │   ├── styleUtils.ts
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Section
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── sectionMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── index.ts
├── containers
│   ├── Blog
│   │   ├── index.tsx
│   │   ├── posts.graphql.ts
│   │   └── styles.ts
│   ├── BlogPost
│   │   ├── comments.graphql.ts
│   │   ├── index.tsx
│   │   ├── post.graphql.ts
│   │   └── styles.ts
│   └── index.ts
├── index.tsx
├── reducers.ts
├── routes.tsx
├── store.tsx
└── styles
    └── index.css
```

### Server file structure
```
src/server
├── db
│   ├── index.ts
│   ├── models
│   │   ├── comment.ts
│   │   └── post.ts
│   └── utils
│       └── uuid.ts
├── graph
│   ├── index.ts
│   ├── mutations
│   │   ├── comment
│   │   │   ├── createComment.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── queries
│   │   ├── comment
│   │   │   ├── comment.ts
│   │   │   ├── comments.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── post
│   │       ├── index.ts
│   │       ├── post.ts
│   │       └── posts.ts
│   ├── schema.json
│   └── types
│       ├── comment
│       │   ├── comment.ts
│       │   └── commentInput.ts
│       ├── index.ts
│       └── post
│           ├── post.ts
│           └── postInput.ts
├── graphqlEntry.ts
└── index.tsx
```

## Apollo GraphQL
Recently, we've added support for Apollo and GraphQL both server and client side.  The starter code in this repo demonstrates how to setup your GraphQL server.  The `/blog` route will show you a very simple example of loading data via Apollo Graphql.

## UI Components
#### Build your next UIKit with this library!
Included in this project are a few primitive components that you can use to bootstrap your next project, or as a reference for building a UIKit.
- [Box](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/tree/master/src/components/Box/index.tsx)
  - Flex Box component!  Whoot!
- [Section](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/tree/master/src/components/Section/index.tsx)
  - A section component.  Extends the Box component giving flex-box properties.
- [Anchor](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/tree/master/src/components/Anchor/index.tsx)
- [Article](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Article/index.tsx)
- [Button](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Button/index.tsx)
- [Footer](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Footer/index.tsx)
- [Heading](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Heading/index.tsx)
- [Headline](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Headline/index.tsx)
- [Hero](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Hero/index.tsx)
- [Image](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Image/index.tsx)
- [Markdown](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Markdown/index.tsx)
- [NavBar](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/NavBar/index.tsx)
- [Paragraph](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/Paragraph/index.tsx)
- [SvgIcon](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/components/SvgIcon/index.tsx)
- And more!

## Generators
We've included some generators so that you can easily scaffold out components & containers from the command line.

To use the generators, run `npm run generator` and select the options you want to use.  The generators will create your component or container and their accompanying imports / exports.

## Server Rendering
This project embraces server-side rendering.  Included in the setup is an [Express server](https://github.com/RyanCCollins/scalable-react-ts-boilerplate/blob/master/src/server.tsx) that will server render.  Note that the server-rendering will not work with the TypeScript source code, so you must compile the project into the Build directory first.  Also, you must copy any other assets (images, markdown, etc.) into the build folder.

## Code Generation
A big feature of the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) project is the code generation tools. They will be incorporated into this project at a later time.  If you are interested in contributing, please let us know!

## Testing
Included is a test framework for all of your React testing needs.  We are using Jest to run the test suite and generate snapshots, plus Enzyme for component introspection.

Tests should be collocated within the component / container they represent. Test files should be named `index.test.tsx` and mocks must be named `myMock.mock.ts`.

Please reference the `[Box](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/client/components/Box)` and `(Section)[https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/client/components/Section]` components for example tests.  More will be added at a later time. 

Note that the test are not compiled by TypeScript, that way there is no code duplication and you can use static types in your tests.

P.S. If you are looking to contribute, this would be a great first contribution!

## Deployment
<!-- HTML snippet -->
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/RyanCCollins/scalable-react-ts-boilerplate">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify">
</a>

The [documentation website](https://scalable-react-ts-boilerplate.herokuapp.com/) built for this boilerplate is deployed to Heroku.  Included is a Procfile that will run the server.  The deployment is automated completely.  After the install script, the deploy script will run on the server in order to compile the bundle and prepare the build folder for server-rendering.

## Scripts
- `npm run setup:yarn`
  - Install the package dependencies via yarn
- `npm install`
  - Install dependencies (the ol' fashioned way)
- `npm run start`
  - Start the dev server
- `npm run build`
  - Build the project
- `npm run deploy`
  - Create a production bundle for deployment
- `npm run run serve:bundle`
  - Serve the production bundle on port 1337
- `npm run test`
  - Run the test suite
- `npm run test:watch`
  - Run the test suite in watch mode
- `npm run test:update`
  - Update the failing snapshot tests

## Resources
- [JavaScript Code Quality with Free Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.1unvvh8vw)
- [Working with React & TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)
- [Setting up a New React / TypeScript Project](http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/)
- [Feature First Architecture](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.8nerdsqhd)

## Contributing
See here for our [contribution guide](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/CONTRIBUTING.md).  We are on slack, please go [here for an invite](https://scalable-react-slack.herokuapp.com/)!  We'd love to hear from you!

## License
See here for the [license](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/LICENSE).

## Roadmap
### v1.0.2

- [X] Add CI
- [ ] Integrate storybook
- [ ] Add a no any rule and update source to use it
- [ ] Add more reusable modules, ala box / section
- [ ] Standardize the tslint configuration
- [ ] Introduce an async redux workflow
  - Redux logic
  - Redux Side-effect
  - Sagas
  - Etc.
- [ ] Remove requires and use es6 imports for all libs

## Troubleshooting
Make sure to use the right version of node.  You can reference the version in the `.nvmrc` file.  For help installing and using NVM, please refer to this [gist](https://gist.github.com/RyanCCollins/1a5686ff9dd51b72eb2d4dc70aa6c1f4).
