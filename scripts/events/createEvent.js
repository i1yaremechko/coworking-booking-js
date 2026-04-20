import { saveEvent } from '../common/storage.js';
import { updateEvent } from './updateEvent.js';

export const createNewEvent = (formData, eventId) => {
  const { startTime, endTime } = formData;

  const startMinutes = startTime.split(':')[1];
  const endMinutes = endTime.split(':')[1];

  if (startMinutes !== '00' || endMinutes !== '00') {
    alert('Bookings are only possible for full hours (example 10:00).');
    return false;
  }

  if (parseInt(endTime) <= parseInt(startTime)) {
    alert('End time must be later than start time.');
    return false;
  }

  if (eventId) {
    updateEvent(eventId, formData);
  } else {
    saveEvent(formData);
  }
  
  return true;
};