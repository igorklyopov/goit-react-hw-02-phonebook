import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container/Container";
import Contacts from "./components/Contacts/Contacts";
import Form from "./components/ContactsForm/ContactsForm";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  // state = {
  //   value: '',
  // };

  static defaultProps = {};

  static propTypes = {};

  addContact = (name) => {
    // console.log(name);
    const contactsItem = {
      id: uuidv4(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contactsItem, ...contacts],
    }));
  };

  render() {
    let contacts = this.state.contacts;
    console.log(contacts.id);

    return (
      <>
        <h1>Phonebook</h1>

        <Container>
          <Form onSubmitData={this.addContact} />
          {/* <input type="text" value={value} onChange={this.onInputChange} /> */}
          <Contacts contacts={contacts} />
        </Container>
      </>
    );
  }
}

export default App;
