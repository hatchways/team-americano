# Team Americano
Team Americano is building an application that allows users to send messages to collegues in their native language and automatically translates it to the collegues language using google translate's API.

The user signs up using their email and is able to add friends by searching them up or sending invite links.

## Requirements
In order to run this application on your local machine, you will need:

* A computer with a stable internet connection in order to make requests to the google translate API.
* NodeJS installed in order to use npm.

## Getting Started
To get started, use the `git clone` the repository to your local machine:

```
git clone https://github.com/hatchways/team-americano
```

next, install all dependencies on the front and back ends of the application using the `npm install` command:

Client:
```
cd client && npm install
```

Server:
```
cd server && npm install
```

Finally, run the `npm start` command on the client and the `npm run dev` command on the server:

Client:
```
npm start
```

Server:
```
npm run dev
```

## Built With
* [ReactJS](https://reactjs.org) - Frontend Framework used.
* [NodeJS](https://nodejs.org) - Backend Language used.
* [ExpressJS](https://expressjs.com) - Backend Framework used.
