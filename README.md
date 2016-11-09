# To Do List

This is the sample To Do List application using React, ES6, Bootstrap, Babel, Webpack

### Pre requisites
Nodejs and NPM

### To run application, download/clone and use below command

```sh
npm install
npm start
```

And visit <http://localhost:8080/>.

## How I built
install Global packeges
```sh
C:\Users\username>npm install -g babel
C:\Users\username>npm install -g babel-cli
```
Add global Dependencies 
```sh
C:\Users\username>npm install webpack --save
C:\Users\username>npm install webpack-dev-server --save
```
create application root folder and install plugins in root folder
```sh
npm install react --save
npm install react-dom --save
npm install babel-core
npm install babel-loader
npm install babel-preset-react
npm install babel-preset-es2015
npm install --save-dev babel-preset-stage-1
npm install --save react-bootstrap
```
init you application
```sh
npm init

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

###App.jsx
contains the default state
```sh
constructor(props) {
        super(props);
        this.state={ 
            items:[ {value:'Sample value','completed':false},
                     {value:'Sample value 1','completed':true},
                     {value:'Sample value 2','completed':true},
                     {value:'Sample value 3','completed':true}
                    ]}
    }
```

All state modification functions
```sh
onadd = (value) => {...}
onremove = (index) => {...}
onchange = (index,value) => {...}
clear = (index,value) => {...}
```
Pass the state and respective state function to UI components as props
```sh
render() {
      return (
         <div className='container'>
              <h1>To Do App using react with Redux</h1>
              <NewToDo onadd={this.onadd} ></NewToDo>
               <TodoList onchange={this.onchange} onremove={this.onremove} items={this.state.items}></TodoList>
               <Button className="btn btn-primary" onClick={this.clear}>Clear</Button>
         </div>
      );
    }
```
###components/NewToDo.jsx
UI component to add a new item. Contains own state to maintain the input provided by the user
```sh
<FormControl value={this.state.value} onChange={this.onchange} type="text" placeholder="Add New" />
constructor(props) {
        super(props);
        this.state={
            value:""
        }
    }
    onchange = (e) => {
        this.setState({value:e.target.value});
    };
 ```
 Calling props.onadd to send the new state input
 ```sh
  onadd = (e) =>{
        e.preventDefault();
        this.props.onadd(this.state.value);
        this.setState({ value: '' });      
    }
```
###components/TodoItem.jsx
UI component to display the item. Using the props.onremove and props.onchange events to remove and change respectively
```sh
onremove = () =>{...}
onchange = (e) =>{...}
render(){
        var _text = this.props.item.completed ?<del>{this.props.item.value}</del>:<div>{this.props.item.value}</div>;
        return (
            <div className="row" >
               <div className="col-xs-4" >
                   <Checkbox onChange={this.onchange} checked={this.props.item.completed}></Checkbox>
                </div>
                <div className="col-xs-4" > {_text}</div>
                <div className="col-xs-4" >
                    <Button type="button" onClick={this.onremove} bsStyle="danger"><Glyphicon glyph="remove" /></Button>
                </div>
            </div>
        );
    }
```

###components/TodoList.jsx
UI component to list the items using components/TodoItem.jsx, and triggering props.onremove and props.onchange events to remove and change respectively
```sh
onremove = () =>{...}
onchange = (e) =>{...}
render(){
        return (
            <div>
                <div className="row" >
                   <div className="col-xs-4" ><h4>#</h4></div>
                    <div className="col-xs-4" > <h4>To Do</h4></div>
                   <div className="col-xs-4" > <h4>Action</h4> </div>
                </div>
                {this.props.items.map((item, i) => <TodoItem onchange={this.onchange} onremove={this.onremove} key={i} index={i} item={item}></TodoItem> )}
            </div>
        );
    }
```
    
###Just for knowledge
####Benefit of using arrow function.
Checkout the onadd function below, and check the binding on context in constructor
```sh
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onadd = this.onadd.bind(this);
        }
        onadd(ev) {...}
    }
```
Making same onadd function as arrow function does not need binding context as it will automatically bind the context for you.
```sh
    class App extends React.Component {
        constructor(props) {
            super(props);
            // this.onadd = this.onadd.bind(this);
        }
        onadd = (ev) => {...}
    }
```
####PropTypes
To run typechecking on the props for a component, you can assign the special propTypes property. Refer https://facebook.github.io/react/docs/typechecking-with-proptypes.html 
```sh
TodoItem.propTypes={
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
```

    


