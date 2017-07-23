# timein-chatbot

This is a NodeJS chatbot that can be deployed to Firebase. It will reply with the local time for a given location/city.


## Introduction

The function `timein` returns the current server date.

Further reading:

 - [Read more about the Firebase SDK for Cloud Functions](https://firebase.google.com/docs/functions)


## Initial setup, build tools and dependencies

### 1. Install the Firebase CLI and enable Functions on your Firebase CLI

You need to have installed the Firebase CLI. If you haven't run:

```bash
npm install -g firebase-tools
```

### 2. Clone this repo

Clone or download this repo and open the `functions` directory.

### 3. Create a Firebase project and configure the quickstart

Create a Firebase Project on the [Firebase Console](https://console.firebase.google.com).

Set up your Firebase project by running `firebase use --add`, select your Project ID and follow the instructions.

> Doesn't work? You may need to [change npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

## Deploy the app to prod

First you need to install the `npm` dependencies of the functions:

```bash
cd functions && npm install; cd ..
```

This installs locally:
 - The Firebase SDK and the Firebase Functions SDK.
 - The [moment](https://www.npmjs.com/package/moment) npm package to format time.
 - The [cors](https://www.npmjs.com/package/cors) npm package to allow Cross Origin AJAX requests on the endpoint.

Deploy to Firebase using the following command:

```bash
firebase deploy
```

This deploys and activates the `timein` Function.

> The first time you call `firebase deploy` on a new project with Functions will take longer than usual.


## Try the sample

After deploying the function you can open the following URLs in your browser:

```
https://us-central1-<project-id>.cloudfunctions.net/timein
```

## License

© Google, 2016. Licensed under an [Apache-2](../../LICENSE) license.
