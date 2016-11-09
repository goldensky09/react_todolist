import React,{PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


class NewToDo extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            value:""
        }
    }
    onchange = (e) => {
        this.setState({value:e.target.value});
    };
    onadd = (e) =>{
        e.preventDefault();
        this.props.onadd(this.state.value);
        this.setState({ value: '' });      
    }
    render(){        
        return (
           <Form inline onSubmit={this.onadd} >
                <FormGroup controlId="formInlineName">
                  <ControlLabel>Add a new item:</ControlLabel>
                 {' '}
                  <FormControl value={this.state.value} onChange={this.onchange} type="text" placeholder="Add New" />
                </FormGroup>                
                {' '}
                <Button className='btn btn-success' type="submit">
                  Add New
                </Button>
            </Form>
               
        );
    }
}

export default NewToDo;

