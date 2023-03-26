export enum FormFields {
  User = 'User',
  Phone = 'Phone',
  Email = 'Email',
  Gender = 'Gender',
  Extra = 'Extra',
  Birthday = 'Birthday',
  Tariff = 'Tariff',
}

export type FormDataItem = {
  user: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  tariff: string;
  extra: string;
  file: File;
};
