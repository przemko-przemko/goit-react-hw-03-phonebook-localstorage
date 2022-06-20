import Form from './components/Form/Form';
import React, { Component } from 'react'
import List from './components/List/List';
import { nanoid } from 'nanoid'
import Filter from './components/Filter/Filter';
import Section from './components/Section';
import "./App.css"


 class App extends Component {

    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter:""

  }
  deleteContact = (id) =>{
    this.setState((state) =>({
      contacts : this.state.contacts.filter(contact => contact.id !==id)
    }))

  }
 
addToStateContact = ({ name, number }) =>{
  [...this.state.contacts].some((contact) => contact.name === name||contact.number === number) ? alert(`${name||number} is on phonebook`):

  this.setState((state) =>({
    contacts:[...this.state.contacts, {name, number, id:nanoid(5)}]
  }))
}
filterContacts = () =>{
  const filteredContacts = [...this.state.contacts].filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))||[this.state.contacts]
  return filteredContacts
}
 
addFilterToState = ((evt) => {
  const { name, value } = evt.target;
  this.setState({ [name]: value });
  
});
addStateToLocalStorage = () =>{
  localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
}
componentDidMount(){
  let localStorageContact = localStorage.getItem("contacts")
  localStorageContact ? this.setState({contacts: JSON.parse(localStorageContact)}) : this.addStateToLocalStorage()
}
componentDidUpdate(){
  this.addStateToLocalStorage()
}

  render() {
    

    const filteredContacts = this.filterContacts()
    return (
      <>
      <Section title="Phonebook"/>
      <Form addToAppState={this.addToStateContact}/>
      <List contacts={filteredContacts} onClick={this.deleteContact}/>
      <Section title="Filter contact"/>
      <Filter filterContact={this.addFilterToState}/>
    </>
    )
  }
}


export default App;
