import React, { RefObject } from "react";

export interface AppState {
  inputValue: string,
  submittedData: []
}

export interface SearchBarState {
  value: string;
}

export type FormProps = {
  handleSubmittedData: Function
}

export type FormState = {
  name: string,
  surname: string,
  date: string,
  selection: string,
  checkbox: boolean,
  switcher: string,
  file: string | undefined,
  cards: Object[],
  errors: {
    name: string,
    surname: string,
    date: string,
    selection: string,
    checkbox: string,
    switcher: string,
    file: string,
  },
  submitted: boolean,
}

// export type FormType = {
//   nameInput: RefObject<HTMLInputElement>
//   dateInput: RefObject<HTMLInputElement>
//   selectionInput: RefObject<HTMLInputElement>
//   checkboxInput: RefObject<HTMLInputElement>
//   switcherInput: RefObject<HTMLInputElement>
//   fileInput: RefObject<HTMLInputElement>
// }