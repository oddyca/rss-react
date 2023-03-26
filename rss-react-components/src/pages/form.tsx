import React, { Component } from 'react'
import { FormProps, FormState } from '../types/types';

import "../styles/form-styles.css"

export default class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectionInput: React.RefObject<HTMLSelectElement>;
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
    this.selectionInput = React.createRef<HTMLSelectElement>();
    this.checkboxInput = React.createRef();
    this.switcherInput = React.createRef();
    this.fileInput = React.createRef();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-content" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={this.nameInput}
              value={this.state.name}
              onChange={this.handleFormInputChange}
              required />
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
              onChange={this.handleFormInputChange}
              required />
            {this.state.errors.surname && <span>{this.state.errors.surname}</span>}
          </div>
          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              ref={this.dateInput}
              value={this.state.date}
              onChange={this.handleFormInputChange}
              required />
            {this.state.errors.date && <span>{this.state.errors.date}</span>}
          </div>
          <div className="form-row">
            <label htmlFor="dropdown">Select country of choice:</label>
            <select
              id="dropdown"
              name="dropdown"
              ref={this.selectionInput}
              value={this.state.date}
              onChange={this.handleFormInputChange}
            >
              <option value="option1">USA</option>
              <option value="option2">United Kingdom</option>
              <option value="option3">Canada</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="checkbox">I consent to the processing of my personal data</label>
            <input
              type="checkbox"
              id="checkbox"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="radio-m">Male</label>
            <input
              type="radio"
              name="radio-g"
              id="radio-m"
              required
            />
            <label htmlFor="radio-f">Female</label>
            <input
              type="radio"
              name="radio-g"
              id="radio-f"
              required
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
