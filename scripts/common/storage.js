export const STORAGE_KEY_DISPLAYED_DATE = 'displayedDate';

const storage = {
  [STORAGE_KEY_DISPLAYED_DATE]: new Date(),
};

export const setItem = (key, value) => {
  storage[key] = value;
};

export const getItem = (key) => storage[key];
