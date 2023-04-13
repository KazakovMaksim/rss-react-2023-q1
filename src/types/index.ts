export enum FormFields {
  User = 'user',
  Phone = 'phone',
  Email = 'email',
  Gender = 'gender',
  Birthday = 'birthday',
  Tariff = 'tariff',
  Extra = 'extra',
}

type FormData = {
  user: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  tariff: string;
  file: File;
};

export type FormDataItem = FormData & {
  extra: string | string[];
  files?: FileList;
};

export type CardItem = FormData & {
  extra: string;
};

export type CardsItems = CardItem[] | [];

export interface ProductCard {
  id: number;
  title: string;
  price: number;
  description: string;
  imgSrc: string;
  category: string;
  rating: number;
}
