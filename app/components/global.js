  import React, {Component} from 'react';
  import { Form, FormGroup, FormControl, InputGroupAddon, InputGroup, Button } from 'react-bootstrap';
  import Gallery from './gallery'

  class Global extends Component {
    constructor(props){
      super(props);
      this.state={
        query: '',
        items: []
      }
    }

    search(){
      console.log('search', this.state.query);
      const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      fetch(`${BASE_URL}${this.state.query}` , {method: 'GET'})
      .then(response => response.json())
      .then(json=> {
        console.log(json);
        let { items } = json;
          this.setState({items})
        }
      );

    }
    render(){
      return(
        <div className="Global">
          <h2>Book Explorer</h2>
          <Form>
          <FormGroup>
            <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
              if (event.key === 'Enter'){
                this.setState({query: event.target.value})
                this.search();
              }
              }}
              />
              <Button onClick={()=> this.search()}>Search</Button>
            </InputGroup>
            <Gallery items={this.state.items} />
          </FormGroup>
          </Form>
        </div>
      )
    }
  }

  export default Global;
