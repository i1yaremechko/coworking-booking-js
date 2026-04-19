export const STORAGE_KEY_DISPLAYED_DATE = 'displayedDate';
export const STORAGE_KEY_EVENTS = 'calendarEvents';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const getEvents = () => {
  return getItem(STORAGE_KEY_EVENTS) || [];
};

export const saveEvent = (eventData) => {
  const events = getEvents();
  
  const newEvent = {
    ...eventData,
    id: Math.random().toString(36).substr(2, 9),
    createDate: new Date().toISOString()
  };
  
  events.push(newEvent);
  setItem(STORAGE_KEY_EVENTS, events);
};
