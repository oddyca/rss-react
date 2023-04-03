import React, { useState } from 'react';
import { FormState, FormData } from '../types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

import '../styles/form-styles.css';
import Cards from '../components/cards';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const [state, setState] = useState<FormState>({
    selection: '',
    cards: [],
  });

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    if (id === 'dropdown') {
      setState({ ...state, selection: value });
    }
  };

  const handleFormSubmit: SubmitHandler<FormData> = (data, event) => {
    event!.preventDefault();
    if (
      !data.name ||
      !data.surname ||
      data.gender === '' ||
      !data.country ||
      !data.date ||
      !data.checkbox
    ) {
      alert('Please fill out all fields.');
      return;
    }

    setState({
      selection: '',
      cards: [
        ...state.cards,
        {
          name: data.name,
          surname: data.surname,
          date: data.date,
          country: data.country,
          gender: data.gender,
          pfp: data.pfp[0] ? URL.createObjectURL(data.pfp[0]) : '',
        },
      ],
    });

    reset();
  };

  return (
    <div className="form-container">
      <form className="form-content" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: /^[A-Z][a-z]*$/,
                message: 'First name must contain only letters and start with an uppercased letter',
              },
            })}
          />
          {errors.name && <span className="submit-error">{errors.name.message}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            {...register('surname', {
              required: 'Last name is required',
              pattern: {
                value: /^[A-Z][a-z]*$/,
                message: 'Last name must contain only letters and start with an uppercased letter',
              },
            })}
          />
          {errors.surname && <span className="submit-error">{errors.surname.message}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register('date', {
              required: 'Date is required',
            })}
          />
          {errors.date && <span className="submit-error">{errors.date.message}</span>}
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
            {...register('checkbox', {
              required: 'This field is required',
            })}
          />
          {errors.checkbox && <span className="submit-error">{errors.checkbox.message}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="radio-m">Male</label>
          <input
            type="radio"
            id="radio-m"
            value="Male"
            {...register('gender', {
              required: 'This field is required',
            })}
          />
          <label htmlFor="radio-f">Female</label>
          <input
            type="radio"
            id="radio-f"
            value="Female"
            {...register('gender', {
              required: 'This field is required',
            })}
          />
          {errors.gender && <span className="submit-error">{errors.gender.message}</span>}
        </div>
        <div className="form-row">
          <label htmlFor="pfp-upload">Upload your profile picture</label>
          <input type="file" accept="image/*" id="pfp-upload" {...register('pfp')} />
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
