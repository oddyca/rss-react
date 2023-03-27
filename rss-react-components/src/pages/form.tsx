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

  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: '',
      selection: '',
      //checkbox: false,
      switcher: '',
      file: '',
      cards: [],
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
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    //const isChecked = (e.target as HTMLInputElement).checked;

    if (name === "name") {
      if (this.nameInput.current?.value) {
        this.setState({...this.state, name: this.nameInput.current?.value});
      }
    } else if (name === "surname") {
      if (this.surnameInput.current?.value) {
        this.setState({...this.state, surname: this.surnameInput.current?.value});
      }
    } else if (name === "date") {
      if (this.dateInput.current?.value) {
        this.setState({...this.state, date: this.dateInput.current?.value});
      }
    } else if (name === "dropdown") {
      if (this.selectionInput.current?.value) {
        this.setState({...this.state, selection: this.selectionInput.current?.value});
      }
    } else if (type === "radio") {
      if (this.switcherInput.current?.value) {
        this.setState({...this.state, switcher: this.switcherInput.current?.value});
      }
    } else if (type === 'file') {
      if (this.fileInput.current?.files) {
        this.setState({...this.state, file: this.fileInput.current.files[0].name});
      } 
    }

  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, surname, switcher, date, file, cards } = this.state;

    if (!name || !surname /*|| !switcher || !date || !file*/) {
      alert('Please fill out all fields.');
      return;
    }
    if (name && !/^[A-Z][a-z]*$/.test(name)) {
      alert('First name must start with an uppercased letter.');
      if (this.nameInput) {
        this.nameInput.current?.focus();
      }
      return;
    }
    if (!/^[A-Z][a-z]*$/.test(surname)) {
      alert('Last name must start with an uppercased letter.');
      if (surname && !/^[A-Z][a-z]*$/.test(surname)) {
        alert('First name must start with an uppercased letter.');
        if (this.surnameInput) {
          this.surnameInput.current?.focus();
        }
      return;
    }}

    this.setState({...this.state, cards: [{name: this.state.name, surname: this.state.surname, date: this.state.date, country: this.state.selection, gender: this.state.switcher}]})

    if (this.props.handleSubmittedData) {
      this.props.handleSubmittedData(this.state.cards)
    }

    console.log(this.state);

    this.setState({
      name: '',
      surname: '',
      date: '',
      selection: '',
      //checkbox: false,
      switcher: '',
      file: '',
      cards: [],
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
    })
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
              value={this.state.selection}
              onChange={this.handleFormInputChange}
            >
              <option value="USA">USA</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
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
              value="Male"
              ref={this.switcherInput}
              onChange={this.handleFormInputChange}
              required
            />
            <label htmlFor="radio-f">Female</label>
            <input
              type="radio"
              name="radio-g"
              id="radio-f"
              value="Female"
              ref={this.switcherInput}
              onChange={this.handleFormInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="pfp-upload">Upload your profile picture</label>
            <input
              type="file"
              id="pfp-upload"
              ref={this.fileInput}
              onChange={this.handleFormInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-form-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
