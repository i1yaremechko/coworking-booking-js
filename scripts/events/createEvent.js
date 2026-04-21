import { createEvent, getEventsList, updateEvent } from '../server/bookingGateway.js';

const isTimeOverlap = (events, formData, eventId) => {
  return events.some(event => {
    if (eventId && event.id === eventId) return false;

    if (event.date === formData.date && event.workspaceId === formData.workspaceId) {
      const newStart = parseInt(formData.startTime);
      const newEnd = parseInt(formData.endTime);
      const existingStart = parseInt(event.startTime);
      const existingEnd = parseInt(event.endTime);

      return newStart < existingEnd && newEnd > existingStart;
    }
    return false;
  });
};

export const createNewEvent = async (formData, eventId) => {
  const { userName, date, startTime, endTime, workspaceId } = formData;
  const events = await getEventsList();

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

  if (isTimeOverlap(events, formData, eventId)) {
    alert('This table is already booked for the selected time. Please choose another option.');
    return false;
  }

  try {
    if (eventId) {
      await updateEvent(eventId, formData);
    } else {
      await createEvent(formData);
    }
    return true;
  } catch (error) {
    alert('Internal Server Error');
    return false;
  }
};