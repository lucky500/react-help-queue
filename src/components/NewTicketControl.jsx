import React, { Component } from 'react';

class NewTicketControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event){
    console.log('button has been clicked:', this);
    this.setState({ formVisibleOnPage: true });
  }

  render(){
    let formAreaContent = null;
    if(this.state.formVisibleOnpage){
      formAreaContent = <h1>Form will eventuall go here!</h1>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTicketForm}>Request for Help</button>
    }
    return(
      <div>
        {formAreaContent}
      </div>
    )
  }
}

export default NewTicketControl;
