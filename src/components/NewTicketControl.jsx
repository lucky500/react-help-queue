import React, { Component } from "react"
import NewTicketForm from "./NewTicketForm"

class NewTicketControl extends Component {

  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this)
  }

  handleDisplayingNewTicketForm(event){
    this.setState({ formVisibleOnPage: true })
  }

  render(){
    let formAreaContent = null
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm />
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTicketForm}>Request for Help</button>
    }

    return (
      <div>
        {formAreaContent}
      </div>
    )
  }
}

export default NewTicketControl
