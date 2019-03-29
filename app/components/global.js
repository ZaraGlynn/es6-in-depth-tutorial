  import React, {Component} from 'react';
  import { Form, FormGroup, FormControl, InputGroupAddon, InputGroup, Glyphicon } from 'react-bootstrap';
  class Global extends Component {
    render(){
      return(
        <div>
          <h2>Book Explorer</h2>
          <Form>
          <FormGroup>
            <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              />

            </InputGroup>
          </FormGroup>
          </Form>
        </div>
      )
    }
  }

  export default Global;
