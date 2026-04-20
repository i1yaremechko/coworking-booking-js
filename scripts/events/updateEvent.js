import { getEvents, setItem, STORAGE_KEY_EVENTS } from '../common/storage.js';

export const updateEvent = (eventId, updatedData) => {
  const events = getEvents();
  const indexEvent = events.findIndex(e => e.id === eventId);
  
  if (indexEvent !== -1) {
    events[indexEvent] = { ...events[indexEvent], ...updatedData };
  }

  setItem(STORAGE_KEY_EVENTS, events);
};