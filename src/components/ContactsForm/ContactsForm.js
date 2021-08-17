import React, { Component } from "react";

/*
 * Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
 * Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
 */
const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.props);

    this.props.onSubmitData(this.state.name, this.state.number);
    // this.props.onSubmitData(this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
            value={number}
            onChange={this.onInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
