
# Description

Most of us can relate to kicking back on the couch and enjoying a movie with friends and family. This app allows users to discover the most popular movies playing as well as top rated movies of all times.

### [Demo](https://mostpopularmovies.herokuapp.com)

# Prerequisites

### Get API Key from themoviedb.org

To fetch popular movies, you will use the API from `themoviedb.org`.

If you don’t already have an account, you will need to create one.

One you regester, go to `https://www.themoviedb.org/settings/api` and send reaqest to get an API Key.

In your request for a key, state that your usage will be for educational/non-commercial use. You will also need to provide some personal information to complete the request. Once you submit your request, you should receive your key via email shortly after.

### Set API key as Enviroment variable

1. Create file `.env.development` in the same folder, where `package.json` is.

2. Create variable `REACT_APP_MOVIEDB_API_KEY` and set it's value to the one listed under `API Key (v3 auth)` section in `https://www.themoviedb.org/settings/api`.

It should look like this:

### `REACT_APP_MOVIEDB_API_KEY=YOUR_MOVIEDB_API_KEY_V3`

#### IMPORTANT: PLEASE REMOVE YOUR API KEY IF YOU CHOOSE TO MAKE CHANGES AND SHARE CODE PUBLICALLY

# Usage

In the project directory, you can run:

### `npm install`

 Run only the first time after downloading.

 Installs all the pacages from `package.json` file.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

