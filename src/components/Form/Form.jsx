import React, { Component } from "react";
import { nanoid } from "nanoid";
import {FormInput, InputBox, SubmitBtn} from "./Form_styles"




export default class Form extends Component {
  inputId1 = nanoid();
  inputId2 = nanoid();

  state = {
    name: "",
    number: "",
  };
  addToState = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
   
  };
  sentStateToApp = (evt) => {
    evt.preventDefault();
    this.props.addToAppState({ ...this.state });
    this.setState((state) => ({ name: "", number: "" }));
    evt.target.closest("form").reset();
  };





  render() {


    return (
        <>
        <FormInput onChange={this.addToState} >
            <label htmlFor={this.inputId1}>Name</label>
          <InputBox 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.inputId1}
          />
          <label htmlFor={this.inputId2}>Number</label>
          <InputBox 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputId2}
          />
          
          <SubmitBtn type="submit" onClick={this.sentStateToApp}>
            Submit
          </SubmitBtn>
        </FormInput>
        </>
    );
  }
}
