export const headerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Profile', path: '/form' },
];

export const formExtra = ['ready to get alerts', 'ready to receive ads'];

export const validation = {
  userMinWordsNum: 2,
  userMinLength: 3,
  phoneMinLength: 9,
  fileType: 'image/jpeg',
  userPattern: /^[A-Z]/,
  phonePattern: /[0-9]{9}/,
  emailPattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
};
