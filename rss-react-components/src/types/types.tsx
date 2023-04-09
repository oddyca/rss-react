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
  selection: string;
  cards: Card[];
};

export type FormData = {
  name: string;
  surname: string;
  date: string;
  country: string;
  checkbox: boolean;
  gender: string;
  pfp: FileList;
};

export type CardsProps = {
  cards: Card[];
};

export type TFetchedData = {
  id: string;
  code: string;
  title: string;
  description: string;
  type: string;
  acronym: string;
  img: string;
  number: number;
};

export type Patent = {
  [key: number]: string | number;
};

export interface ModalProps {
  cardData: string[];
}

export type SearchProps = {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setDataCards: React.Dispatch<React.SetStateAction<TFetchedData[]>>;
};
