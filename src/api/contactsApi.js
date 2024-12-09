import axios from 'axios';

const API_URL = 'https://6754c03736bcd1eec851e88a.mockapi.io/'; 

export const fetchContactsFromAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addContactToAPI = async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const deleteContactFromAPI = async (contactId) => {
  await axios.delete(`${API_URL}/${contactId}`);
};
