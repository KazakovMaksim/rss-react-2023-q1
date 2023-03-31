export enum FormFields {
  User = 'user',
  Phone = 'phone',
  Email = 'email',
  Gender = 'gender',
  Extra = 'extra',
  Birthday = 'birthday',
  Tariff = 'tariff',
}

export type FormDataItem = {
  user: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  tariff: string;
  extra: string | string[];
  file: File;
  files?: FileList;
};
