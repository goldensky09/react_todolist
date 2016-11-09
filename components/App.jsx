import React from 'react';
import TodoList from './TodoList.jsx';
import NewToDo from './NewToDo.jsx';
import { Button } from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items:[ {value:'Sample value','completed':false},
                     {value:'Sample value 1','completed':true},
                     {value:'Sample value 2','completed':true},
                     {value:'Sample value 3','completed':true}
                    ]}
    }
    componentWillMount() {

    }
    componentDidMount(){}
    componentWillUnmount(){}

    onadd = (value) => {
         var newState = [].concat(this.state.items);

              newState.unshift({
                value: value,
                completed: false
              });

             this.setState({"items":newState})
    }
     onremove = (index) => {
         var items = [].concat(this.state.items);

              items.splice(index, 1);

               this.setState({"items":items})
    }
      onchange = (index,value) => {
         var newState = [].concat(this.state.items);

              newState[index].completed =value;

              this.setState({"items":newState})
    }
    clear = (index,value) => {
       this.setState({"items":[]})
    }
    render() {
      return (
         <div className='container'>
              <h1>To Do App using React</h1>
              <NewToDo onadd={this.onadd} ></NewToDo>
               <TodoList onchange={this.onchange} onremove={this.onremove} items={this.state.items}></TodoList>
               <Button className="btn btn-primary" onClick={this.clear}>Clear</Button>
         </div>
      );
    }
}
export default App;
