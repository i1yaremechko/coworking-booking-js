import { getEvents, setItem, STORAGE_KEY_EVENTS } from '../common/storage.js';

export const deleteEvent = (eventId) => {
  const allEvents = getEvents();
  const updatedEvents = allEvents.filter(event => event.id !== eventId);
  
  setItem(STORAGE_KEY_EVENTS, updatedEvents);
};