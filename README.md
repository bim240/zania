# Zania Frontend Only Assignment

## [Live Link](https://silver-vacherin.netlify.app/)

# About this Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Project Requirement

- Load in the frontend a static JSON file - Done
- Display the content as 5 cards, 3 in the first row and 2 in the second row. - Done
- Display a placeholder spinner for each image that is loading. - Done
- Make the application so the cards can be reordered via drag and drop. - Done
- Make so clicking on a card displays the image as an overlay in the middle of the webpage. Make so
  pressing ESC closes the image. - Done
- Add a README file to explain how to run it. - Done

## Technologies Used

Apart from usual once we use in React

- TypeScript
- Eslint
- Husky
- @tanstack/react-query
- Axios
- React-dnd
- React-simple-image-viewer

## Project Structure

- src
  - app
    - configs
      - axios - Contains axios instance and related interceptors
      - config - Contains all the env variable ready to be exported with all the logic
      - react-query - Contains query clients.
    - pages
      - components - Contains all the component used for home page
      - app.tsx - Makes home page (as we only had one page). This is where all the component is
        clubbed together
      - style.css - css for home page
    - services - Contains all the api call for home page.
    - utils
      - types - Will contains all the current and future type for all the pages
      - data - the static data for this assignment
  - index.css
  - index.tsx
  - react-app-env.d
  - reportWebVitals

## ScreenShot

<img width="1428" alt="image" src="https://github.com/user-attachments/assets/06ad808f-fe41-4dc0-bce0-11c6cb7ecf08">
