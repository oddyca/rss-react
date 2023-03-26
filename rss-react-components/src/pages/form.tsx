import React, { Component } from 'react'
import { FormProps, FormState } from '../types/types';

import "../styles/form-styles.css"

export default class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectionInput: React.RefObject<HTMLInputElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  switcherInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  //handleFormInputChange: Function;

  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: '',
      selection: '',
      checkbox: false,
      switcher: '',
      file: '',
      errors: {
        name: '',
        surname: '',
        date: '',
        selection: '',
        checkbox: '',
        switcher: '',
        file: '',
      },
      submitted: false,
    };
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectionInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.switcherInput = React.createRef();
    this.fileInput = React.createRef();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="form-container">
        <form className="form-content">
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={this.nameInput}
              value={this.state.name}
              onChange={this.handleFormInputChange} />
            {this.state.errors.name && <span>{this.state.errors.name}</span>}
          </div>
          <div className="form-row">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              ref={this.surnameInput}
              value={this.state.surname}
              onChange={this.handleFormInputChange} />
            {this.state.errors.surname && <span>{this.state.errors.surname}</span>}
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
