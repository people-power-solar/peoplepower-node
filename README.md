# People Power Web App

_Last updated: Jan 14, 2019 (by Fang)_

## Quickstart

**STEP ONE: Clone this project**

1. Click on 'Clone or Download' (green button near the top right) and copy the URL.
2. Then in you desired directory, do `git clone {COPIED URL HERE}`

**STEP TWO: Set up the `.env` file**

The project uses a number of secrets that are passed via a `.env` file (for security reasons). We need to set this `.env` file now.

1. In your top level directory (`/peoplepower-web`, the same directory containing the src folder, `package.json` and a couple of other files), create a file called `.env`.
2. Copy and paste the following into `.env`:

```
REACT_APP_AIRTABLE_API_KEY={YOUR AIRTABLE API KEY HERE}

REACT_APP_PAYPAL_CLIENT_ID={PAYPAL CLIENT ID}

REACT_APP_GOOGLE_API_KEY={REACT APP GOOGLE API KEY}

```

You can get the `PAYPAL CLIENT ID` and `REACT APP GOOGLE API KEY` from Notion in 'Credentials Reference'. Follow the instructions in this [Airtable support page](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-) to get your Airtable API Key.

3. Run `yarn start`. This starts the development server, and should open a tab with the url `localhost:3000` where you can find the People Power web app. If the tab doesn't open up normally, you can type `localhost:3000` in your browser manually to open it.
4. To verify that you've done step two correctly, run `REACT_APP_AIRTABLE_API_KEY={YOUR AIRTABLE API KEY HERE} yarn test`. This command passes in an environment variable acccessible by `REACT_APP_AIRTABLE_API_KEY`, and runs tests locally. This should take about 30s to a minute, and if you've done everything so correctly so far, all tests shoulld pass.

Congrats! You now have a working version of the People power on your local machine ✨

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts (redacted from Create React App)

In the project directory, you can run:

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Code Splitting: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment: https://facebook.github.io/create-react-app/docs/deployment

`npm run build` fails to minify: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
