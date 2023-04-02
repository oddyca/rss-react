import React, { useState } from 'react';
import { FormProps, FormState, FormData } from '../types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

import '../styles/form-styles.css';
import Cards from '../components/cards';

export default function Form(props: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [state, setState] = useState<FormState>({
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
  });

  const handleFormInputChange = (
    e: React.ChangeEvent<EventTarget & (HTMLInputElement | HTMLSelectElement)>
  ) => {
    const { id, type, value, checked } = e.target as HTMLInputElement;

    console.log(value);

    const isCheckedMale = e.target.value === 'Male' && (e.target as HTMLInputElement).checked;
    const isCheckedFemale = e.target.value === 'Female' && (e.target as HTMLInputElement).checked;

    if (id === 'name') {
      setState({ ...state, name: value });
    } else if (id === 'surname') {
      setState({ ...state, surname: value });
    } else if (id === 'date') {
      setState({ ...state, date: value });
    } else if (id === 'dropdown') {
      setState({ ...state, selection: value });
    } else if (type === 'checkbox') {
      setState({ ...state, checkbox: checked });
    } else if (type === 'radio') {
      if (isCheckedMale) {
        setState({ ...state, switcher: value });
      } else if (isCheckedFemale) {
        setState({ ...state, switcher: value });
      }
    } else if (type === 'file') {
      const inputElement = e.target as HTMLInputElement;
      if (!inputElement.files) return;
      setState({
        ...state,
        file: URL.createObjectURL(inputElement.files[0]),
      });
    }
  };

  const handleFormSubmit: SubmitHandler<FormData> = (data, event) => {
    event!.preventDefault();
    console.log('DATA from handleFormFsubmit', data);
    const { name, surname, switcher, date, file, cards } = state;

    if (!name || !surname || !switcher || !date || !file) {
      alert('Please fill out all fields.');
      return;
    }
    if (name && !/^[A-Z][a-z]*$/.test(name)) {
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          name: 'First name must contain only letters and start with an uppercased letter.',
        },
      }));
      return;
    }
    if (surname && !/^[A-Z][a-z]*$/.test(surname)) {
      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          surname: 'Last name must contain only letters and start with an uppercased letter.',
        },
      }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      cards: [
        ...cards,
        {
          name: state.name,
          surname: state.surname,
          date: state.date,
          country: state.selection || 'USA',
          gender: state.switcher,
          pfp: state.file,
        },
      ],
    }));

    reset();
    setState({
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
      submitted: true, // set submitted to true to indicate that the form has been submitted
    });
  };

  return (
    <div className="form-container">
      <form className="form-content" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { onChange: handleFormInputChange })}
            value={state.name}
            required
          />
          {state.errors.name && <span className="submit-error">{state.errors.name}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            {...register('surname', { onChange: handleFormInputChange })}
            value={state.surname}
            required
          />
          {state.errors.surname && <span className="submit-error">{state.errors.surname}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register('date', { onChange: handleFormInputChange })}
            value={state.date}
            required
          />
          {state.errors.date && <span>{state.errors.date}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="dropdown">Select country of choice:</label>
          <select
            id="dropdown"
            {...register('country', { onChange: handleFormInputChange })}
            value={state.selection}
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
            name="dropdown"
            checked={state.checkbox}
            onChange={handleFormInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="radio-m">Male</label>
          <input
            type="radio"
            id="radio-m"
            value="Male"
            {...register('gender', { onChange: handleFormInputChange })}
            required
          />
          <label htmlFor="radio-f">Female</label>
          <input
            type="radio"
            id="radio-f"
            value="Female"
            {...register('gender', { onChange: handleFormInputChange })}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="pfp-upload">Upload your profile picture</label>
          <input
            type="file"
            accept="image/*"
            id="pfp-upload"
            {...register('pfp', { onChange: handleFormInputChange })}
            required
          />
        </div>
        <button type="submit" className="submit-form-btn">
          Submit
        </button>
      </form>
      <div className="form-cards">
        {state.cards?.length !== 0 ? (
          <Cards cards={state.cards} />
        ) : (
          <h3>Please, fill out the form.</h3>
        )}
      </div>
    </div>
  );
}
