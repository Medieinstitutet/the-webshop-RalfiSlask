export const formInputs = [
  {
    id: 1,
    heading: 'billing details',
    inputs: [
      { id: 'name', label: 'Name', placeholder: 'name', type: 'text', required: true },
      {
        id: 'email',
        label: 'Email Address',
        placeholder: 'email',
        type: 'email',
      },
      {
        id: 'phone',
        label: 'Phone Number',
        placeholder: '+123-456-789',
        type: 'text',
      },
    ],
  },
  {
    id: 2,
    heading: 'shipping info',
    inputs: [
      { label: 'Your Address', placeholder: 'address', id: 'address', type: 'text' },
      { label: 'City', placeholder: 'Stockholm', id: 'city', type: 'text' },
      { label: 'Zip Code', placeholder: '12345', id: 'zip', type: 'text' },
      { label: 'Country', placeholder: 'email', id: 'country', type: 'text' },
    ],
  },
];

export const emptyInputs = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zip: '',
  country: '',
};
