import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  URL, Company, Companies, APIKey, Sectors,
} from './info';

const fetchCompanies = createAsyncThunk(
  'companies/getCompanies',
  async (sector) => {
    const baseUrl = `${URL}${Companies}?sector=${sector}&apikey=${APIKey} `;
    const response = await axios.get(baseUrl);
    return response.data;
  },
);
const fetchCompany = createAsyncThunk(
  'company/fetchCompany',
  async (symbol) => {
    const baseUrl = `${URL}${Company}${symbol}?apikey=${APIKey} `;
    const response = await axios.get(baseUrl);
    return response.data[0];
  },
);
const fetchSectors = createAsyncThunk(
  'sectors/fetchSectors',
  async () => {
    const baseUrl = `${URL}${Sectors}?apikey=${APIKey} `;
    const response = await axios.get(baseUrl);
    return response.data;
  },
);
export default fetchCompanies;
export { fetchCompany, fetchSectors };
