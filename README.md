<h1 align="center">
  <br>
  <img src="https://i.imgur.com/DrABlj7.png" alt="Animavita" height="125" width="125">
  <br>
  <b>Pizza Hut</b>
  <br>
</h1>

<h4 align="center">
This is my first app and was made to meet a challenge proposed in one of Rocketseat's bootcamps.</h4>

<p align="center"><i >"Yes, there is something better than a pizza, several pizza.
"</i> </p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<h1 align="left">
  <b>Images</b>
</h1>

## How To Use

To clone and run this app you can use [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/), [React-Native](https://github.com/facebook/react-native), [React](https://github.com/facebook/react), [MongoDB](https://www.mongodb.com/) and some Android device simulator or run on some physical Android device. Check out this [Rocketseat](https://docs.rocketseat.dev/ambiente-react-native/introducao) page to learn how to set up your environment to run a mobile version with React Native.

You will start by cloning or downloading this repository. After that we will start configuring the `Server` folder.

Don't forget to install the dependencies of each folder using your preferred package manager (npm, yarn etc).

In the Server folder you must configure the connection to the MongoDB database. In the `database` folder change the following location with your local database url or MongDB Atlas url:

```bash
  #src/database/index.js
  mongoose
  .connect(YOUR_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error));

```

```bash
# Clone this repository
$ git clone

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Tech Stack

<h1 align='center'>
  <img src="https://i.imgur.com/Qn1wK2z.png" alt="Animavita" height="" width="">
</h1>

- [React](https://github.com/facebook/react) _(100% [Hooks](https://reactjs.org/docs/hooks-intro.html), zero classes)_
- [React Native](https://github.com/facebook/react-native)
- [Redux](https://github.com/reduxjs/react-redux)
- [MongoDB](https://www.mongodb.com/)
- [Redux Saga](https://github.com/redux-saga/redux-saga/)

## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or has helped you in anyway, I'd like you send me an email on <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

## Related

[markdownify-web](https://github.com/amitmerchant1990/markdownify-web) - Web version of Markdownify

## License

MIT

---

> Linkedin [@amit_merchant](https://twitter.com/amit_merchant)
