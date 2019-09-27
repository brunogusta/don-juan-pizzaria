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

## :camera: Images & Gifs

<p align='center'>
  <img src="https://i.imgur.com/syTMuQZ.gif" alt="Animavita" height="400">
  <img src="https://i.imgur.com/XkXmgwF.gif" alt="Animavita" height="400">
  <img src="https://i.imgur.com/VQ1hZaw.jpg"alt="Animavita" height="400">
  </br>
  </br> 
  <img src="https://i.imgur.com/UN1JmVY.jpg"alt="Animavita" height="400">
  <img src="https://i.imgur.com/BpfHI44.jpg"alt="Animavita" height="400">
  <img src="https://i.imgur.com/IFgOcvl.jpg"alt="Animavita" height="400">
</>
<p align='center'>
  <img src="https://i.imgur.com/r7PtYJy.png"alt="Animavita"  width="685">
</p>
<p align='center'>
  <img src="https://i.imgur.com/0c2t6Ha.png"alt="Animavita"  width="685">
</p>

## :zap: How to use

To clone and run this app you can use [Git](https://git-scm.com),[Node.js](https://nodejs.org/en/download/), [React-Native](https://github.com/facebook/react-native), [React](https://github.com/facebook/react), [MongoDB](https://www.mongodb.com/) and some Android device simulator or run on some physical Android device. Check out this [Rocketseat](https://docs.rocketseat.dev/ambiente-react-native/introducao) page to learn how to set up your environment to run a mobile version with React Native.

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

## :bulb: Tech Stack

<h1 align='center'>
  <img src="https://i.imgur.com/Qn1wK2z.png" alt="Animavita" height="" width="">
</h1>

- [React](https://github.com/facebook/react) _(100% [Hooks](https://reactjs.org/docs/hooks-intro.html), zero classes)_
- [React Native](https://github.com/facebook/react-native)
- [Redux](https://github.com/reduxjs/react-redux)
- [MongoDB](https://www.mongodb.com/)
- [Redux Saga](https://github.com/redux-saga/redux-saga/)

## :hearts: Credits

- Special thanks to my friend and mentor [Wendel Freitas](https://github.com/wendelfreitas).

## :page_facing_up: License

MIT

---

> LinkedIn [Bruno Gustavo](https://www.linkedin.com/in/bruno-gustavo-90502a13a/)

<p align='center'>
  Made with :hearts: by Bruno Gustavo.
</p>
