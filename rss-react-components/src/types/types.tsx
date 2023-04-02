type IhandelSubmittedData = (arg: object[]) => void;

type Card = {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  pfp: string;
};

export interface AppState {
  inputValue: string;
}

export interface SearchBarState {
  value: string;
}

export type HomeState = {
  submittedData: object[];
};

export type FormProps = {
  handleSubmittedData: IhandelSubmittedData | undefined;
};

export type FormState = {
  name: string;
  surname: string;
  date: string;
  selection: string;
  switcher: string;
  checkbox: boolean;
  file: string;
  cards: Card[];
  errors: {
    name: string;
    surname: string;
    date: string;
    selection: string;
    checkbox: string;
    switcher: string;
    file: string;
  };
  submitted: boolean;
};

export type FormData = {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  pfp: string;
};

export type CardsProps = {
  cards: Card[];
};
