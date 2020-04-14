<h1 align="center">
  <br>
  <img src="https://i.imgur.com/DrABlj7.png" alt="DonJuan" height="125" width="125">
  <br>
  <b>Don Juan</b>
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

### Mobile

<p align='center'>
  <img src="https://i.imgur.com/syTMuQZ.gif" alt="DonJuan" height="400">
  <img src="https://i.imgur.com/XkXmgwF.gif" alt="DonJuan" height="400">
  <img src="https://i.imgur.com/VQ1hZaw.jpg"alt="DonJuan" height="400">
  </br>
  </br> 
  <img src="https://i.imgur.com/UN1JmVY.jpg"alt="DonJuan" height="400">
  <img src="https://i.imgur.com/BpfHI44.jpg"alt="DonJuan" height="400">
  <img src="https://i.imgur.com/IFgOcvl.jpg"alt="DonJuan" height="400">
</p>

### Web

<p align='center'>
  <img src="https://i.imgur.com/mOhAn4U.png"alt="DonJuan"  width="685">
</p>
<p align='center'>
  <img src="https://i.imgur.com/2I0j12l.png"alt="DonJuan"  width="685">
</p>

<div id='how-to-use'>
  <h2>:zap: How to use</h2>
</div>

Check out this [Rocketseat](https://docs.rocketseat.dev/ambiente-react-native/introducao) page to learn how to set up your environment to run a mobile version with React Native.

You will start by cloning or downloading this repository. After that we will start configuring the `Server` folder.

Don't forget to install the dependencies of each folder using your preferred package manager (npm, yarn etc).

In the Server folder you must configure the connection to the MongoDB database(you must have MongoDB installed or use MongoDB Atlas). In the `database` folder change the following location with your local database url or MongDB Atlas url:

```bash
  #src/database/index.js
  mongoose
  .connect(YOUR_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error));

```

That done, let's add collections to the database, so you have to use the following command in the terminal for local mongoDB:

```
mongoimport --db dbName --collection collectionName --file fileName.json
```

In filename.json use the files contained in the Collections folder of this repository. Use the relative path for --file: `~/Desktop/PizzaHut-master/Collections/pizzatypes`. Do this for all collections.

In case you use MongoDB Atlas:

```
mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-gxfgl.mongodb.net:27017,cluster0-shard-00-01-gxfgl.mongodb.net:27017,cluster0-shard-00-02-gxfgl.mongodb.net:27017 --ssl --username desktop_user32 --password <PASSWORD> --authenticationDatabase admin --db <DATABASE> --collection <COLLECTION> --type <FILETYPE> --file <FILENAME>

```

Replace PASSWORD with the password for the admin user, DATABASE with the name of the database you wish to import/export to your cluster, and COLLECTION with the name of the collection you wish to import/export to your cluster. Replace FILETYPE with json or csv to specify the file type. Where applicable, replace FILENAME with the location and name of the output file (for export) or data source (for import).

Use the files in the Collections folder by specifying the relative path at FILENAME.

After that, the Back-End is complete.

In the Mobile and Web folder you just need to change the ip in the `services/api.js` folder to your local ip and the application is ready for use.

Note: The web version can only be used by admin users, the user collection already has an admin account and must be used to login.

Email: `admin@admin.com`

Password: `admin`

<div id='tech-stack'>
  <h2>:bulb: Tech Stack</h2>
</div>

<h1 align='center'>
  <img src="https://i.imgur.com/Qn1wK2z.png" alt="DonJuan" height="" width="">
</h1>

- [React](https://github.com/facebook/react) _(100% [Hooks](https://reactjs.org/docs/hooks-intro.html), zero classes)_
- [React Native](https://github.com/facebook/react-native)
- [Redux](https://github.com/reduxjs/react-redux)
- [MongoDB](https://www.mongodb.com/)
- [Redux Saga](https://github.com/redux-saga/redux-saga/)

<div id='credits'>
  <h2>:hearts: Credits</h2>
</div>

- Special thanks to my friend and mentor [Wendel Freitas](https://github.com/wendelfreitas).

<div id='license'>
  <h2>:page_facing_up: License</h2>
</div>

MIT

---

> LinkedIn [Bruno Gustavo](https://www.linkedin.com/in/bruno-gustavo-90502a13a/)

<p align='center'>
  Made with :hearts: by Bruno Gustavo.
</p>
