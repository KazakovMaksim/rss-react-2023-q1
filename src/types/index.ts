export enum FormFields {
  User = 'User',
  Phone = 'Phone',
  Email = 'Email',
  Gender = 'Gender',
  Extra = 'Extra',
  Birthday = 'Birthday',
}

export type FormDataItem = {
  user: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  extra: string;
};
