# To Do List

This is the sample To Do List application using React, ES6, Bootstrap, Babel, Webpack

### pre requistes
Install Nodejs

### To run application, download/clone and use below command

```sh
npm install
npm start
```

And visit <http://localhost:8080/>.

## How I built starting from scrach
```sh
npm init
npm install --save react
npm install --save react-bootstrap
npm install --save react-dom
npm install --save webpack
npm install --save webpack-dev-server
npm install --save-dev babel-preset-stage-1
```
###open package.json
make sure script key looks like below
```sh
"scripts": {
    "start": "webpack-dev-server --hot"
  }
```
###open webpack.config.js, update query key
```sh
query: {
               presets: ['es2015', 'react', 'stage-1']
            }
```
###index.html
application will be run under "app" dom node
```sh
<div id="app"></div>
```

###main.js
starting point of application
```sh
ReactDOM.render(<App />, document.getElementById('app'));
```


