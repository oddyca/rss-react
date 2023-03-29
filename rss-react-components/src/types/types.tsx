import React, { RefObject } from "react";

export interface AppState {
  inputValue: string
}

export interface SearchBarState {
  value: string;
}

export type HomeState = {
  submittedData: Object[] | undefined
}

export type FormProps = {
  handleSubmittedData: Function | undefined
}

export type FormState = {
  name: string | undefined,
  surname: string | undefined,
  date: string,
  selection: string,
  switcher: string | undefined,
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

export type CardsProps = {
  cards: Object[] | undefined
}