# Isomorphic example with React and sails

A very simple real time application

### with
- [Sails](http://sailsjs.org)
- [React](https://facebook.github.io/react/)
- [React-router](http://rackt.github.io/react-router/)  A complete routing solution for React.js
- [sails-react-store](https://github.com/wi2/sails-react-store) wrapper of sails.socket.io with auto blueprint
- [sails-generate-isoreact](https://github.com/wi2/sails-generate-isoreact) simple starter kit

### Usage
```sh
$ git clone git@github.com:wi2/isomorphic-sails-react-example.git

$ cd isomorphic-sails-react-example

$ npm install

$ sails lift
```



### dependencies : Browserify
```sh
$ npm install -g browserify
```
##### regenerate dependencies
```sh
$ browserify -r react -r react-router -r sails-react-store > assets/js/dependencies/build.js
```



### test real time
go to http://localhost:1337
and click on articles and write in another console :

```sh
$ curl -H "Content-Type: application/json" -X POST -d '{"title": "post 1"}' http://localhost:1337/post
```
