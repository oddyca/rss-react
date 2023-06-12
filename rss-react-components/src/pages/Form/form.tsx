import React, { useState } from 'react';
import { FormData } from '../../types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setCards } from '../Form/formCardsSlice';
import { RootState } from '../../app/store';

import '../../styles/form-styles.css';
import Cards from '../../components/cards';
import { useSelector, useDispatch } from 'react-redux';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const formStoreState = useSelector((state: RootState) => {
    return state.rootReducer.formCards;
  });

  const dispatch = useDispatch();

  const [selectOption, setSelectOption] = useState('');

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

    dispatch(
      setCards({
        selection: '',
        cards: {
          name: data.name,
          surname: data.surname,
          date: data.date,
          country: data.country,
          gender: data.gender,
          pfp: data.pfp[0] ? URL.createObjectURL(data.pfp[0]) : '',
        },
      })
    );
    reset();
  };

  return (
    <div className="form-container">
      <div className="form-decoration">
        <div className="errors-container">
          <div>
            {errors.name && (
              <span className="submit-error anim-typewriter">{errors.name.message}</span>
            )}
          </div>
          <div>
            {errors.surname && (
              <span className="submit-error anim-typewriter">{errors.surname.message}</span>
            )}
          </div>
          <div>
            {errors.date && (
              <span className="submit-error anim-typewriter">{errors.date.message}</span>
            )}
          </div>
          <div></div>
          <div>
            {errors.checkbox && (
              <span className="submit-error anim-typewriter">{errors.checkbox.message}</span>
            )}
          </div>
          <div>
            {errors.gender && (
              <span className="submit-error anim-typewriter">{errors.gender.message}</span>
            )}
          </div>
          <div>
            {errors.pfp && (
              <span className="submit-error anim-typewriter">{errors.pfp.message}</span>
            )}
          </div>
        </div>
        <div className="form-border">
          <form className="form-content" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-dec-top-left">
              <div className="dec-top-row1">FORM v0.431sd 05wwetf</div>
              <div className="dec-top-row2">
                <p>
                  237320
                  <br />
                  929377
                  <br />
                  374320
                </p>
                <p>
                  552030
                  <br />
                  859668
                  <br />
                  903345
                </p>
                <p>
                  002030
                  <br />
                  929308
                  <br />
                  237302
                </p>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="input-field"
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /^[A-Z][a-z]*$/,
                    message:
                      'First name must contain only letters and start with an capital letter',
                  },
                })}
              />
            </div>
            <div className="form-row">
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                className="input-field"
                {...register('surname', {
                  required: 'Last name is required',
                  pattern: {
                    value: /^[A-Z][a-z]*$/,
                    message: 'Last name must contain only letters and start with a capital letter',
                  },
                })}
              />
            </div>
            <div className="form-row">
              <label htmlFor="date">Date:</label>
              <input
                className="input-field"
                type="date"
                id="date"
                {...register('date', {
                  required: 'Date is required',
                })}
              />
            </div>
            <div className="form-row">
              <label htmlFor="dropdown">Select country of choice:</label>
              <select id="dropdown" {...register('country', { onChange: setSelectOption })}>
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
            </div>
            <div className="form-row">
              <label htmlFor="pfp-upload">Upload your profile picture</label>
              <input
                type="file"
                accept="image/*"
                id="pfp-upload"
                {...register('pfp', {
                  required: 'Image is required',
                })}
              />
            </div>
            <button type="submit" className="submit-form-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="form-bottom-decoration">
          <p>
            3.0xF.234{`[`}WRR{`]`}
          </p>
          <p>荒坂社</p>
        </div>
      </div>
      <div className="form-cards">
        {formStoreState.cards?.length !== 0 ? (
          <Cards cards={formStoreState.cards} />
        ) : (
          <h3>Please, fill out the form.</h3>
        )}
      </div>
    </div>
  );
}
