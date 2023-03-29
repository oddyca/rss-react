import React from 'react';
import { FormProps, FormState } from '../types/types';

import '../styles/form-styles.css';
import Cards from '../components/cards';

export default class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectionInput: React.RefObject<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  switcherInputMale: React.RefObject<HTMLInputElement>;
  switcherInputFemale: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: '',
      selection: '',
      switcher: '',
      checkbox: false,
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
    this.switcherInputMale = React.createRef();
    this.switcherInputFemale = React.createRef();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type } = e.target;

    const isCheckedMale = e.target.value === 'Male' && (e.target as HTMLInputElement).checked;
    const isCheckedFemale = e.target.value === 'Female' && (e.target as HTMLInputElement).checked;

    if (name === 'name') {
      const value = this.nameInput.current?.value || '';
      this.setState({ ...this.state, name: value });
    } else if (name === 'surname') {
      const value = this.surnameInput.current?.value || '';
      this.setState({ ...this.state, surname: value });
    } else if (name === 'date') {
      const value = this.dateInput.current?.value || '';
      this.setState({ ...this.state, date: value });
    } else if (name === 'dropdown') {
      const value = this.selectionInput.current?.value || '';
      this.setState({ ...this.state, selection: value });
    } else if (type === 'checkbox') {
      const value = this.checkboxInput.current?.checked || false;
      this.setState({ ...this.state, checkbox: value });
    } else if (type === 'radio') {
      if (isCheckedMale) {
        const value = this.switcherInputMale.current?.value || '';
        this.setState({ ...this.state, switcher: value });
      } else if (isCheckedFemale) {
        const value = this.switcherInputFemale.current?.value || '';
        this.setState({ ...this.state, switcher: value });
      }
    } else if (type === 'file') {
      if (this.fileInput.current?.files) {
        this.setState({
          ...this.state,
          file: URL.createObjectURL(this.fileInput.current.files[0]),
        });
      }
    }
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, surname, switcher, date, file, cards } = this.state;

    if (!name || !surname || !switcher || !date || !file) {
      alert('Please fill out all fields.');
      return;
    }
    if (name && !/^[A-Z][a-z]*$/.test(name)) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          name: 'First name must contain only letters and start with an uppercased letter.',
        },
      }));
      if (this.nameInput) {
        this.nameInput.current?.focus();
      }
      return;
    }
    if (surname && !/^[A-Z][a-z]*$/.test(surname)) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          surname: 'Last name must contain only letters and start with an uppercased letter.',
        },
      }));
      if (this.surnameInput) {
        this.surnameInput.current?.focus();
      }
      return;
    }

    this.setState(
      (prevState) => ({
        ...prevState,
        cards: [
          ...cards,
          {
            name: this.state.name,
            surname: this.state.surname,
            date: this.state.date,
            country: this.state.selection || 'USA',
            gender: this.state.switcher,
            pfp: this.state.file,
          },
        ],
      }),
      () => {
        if (this.props.handleSubmittedData) {
          this.props.handleSubmittedData(this.state.cards);
        }

        this.setState((prevState) => ({
          ...prevState,
          name: '',
          surname: '',
          date: '',
          selection: '',
          switcher: '',
          checkbox: false,
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
        }));
        this.nameInput.current!.value = '';
        this.surnameInput.current!.value = '';
        this.dateInput.current!.value = '';
        this.checkboxInput.current!.checked = false;
        this.switcherInputMale.current!.checked = false;
        this.switcherInputFemale.current!.checked = false;
        this.fileInput.current!.value = '';
      }
    );
  };

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
              required
            />
            {this.state.errors.name && (
              <span className="submit-error">{this.state.errors.name}</span>
            )}
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
              required
            />
            {this.state.errors.surname && (
              <span className="submit-error">{this.state.errors.surname}</span>
            )}
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
              required
            />
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
              ref={this.checkboxInput}
              checked={this.state.checkbox}
              onChange={this.handleFormInputChange}
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
              ref={this.switcherInputMale}
              onChange={this.handleFormInputChange}
              required
            />
            <label htmlFor="radio-f">Female</label>
            <input
              type="radio"
              name="radio-g"
              id="radio-f"
              value="Female"
              ref={this.switcherInputFemale}
              onChange={this.handleFormInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="pfp-upload">Upload your profile picture</label>
            <input
              type="file"
              accept="image/*"
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
        <div className="form-cards">
          {this.state.cards?.length !== 0 ? (
            <Cards cards={this.state.cards} />
          ) : (
            <h3>Please, fill out the form.</h3>
          )}
        </div>
      </div>
    );
  }
}
