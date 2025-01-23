// src/services/api.ts

import { getConfig } from '../config';

/**
 * Fetches data from the API endpoint
 */
export const fetchData = async () => {
  try {
    const { VITE_REACT_API_URL } = getConfig();
    const response = await fetch(`${VITE_REACT_API_URL}/endpoint`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
