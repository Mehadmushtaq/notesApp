import axios from 'axios';
import {ENDPOINTS} from './endpoint';

export const getUsers = async () => {
  try {
    const response = await axios.get(ENDPOINTS.STUDENTS);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
