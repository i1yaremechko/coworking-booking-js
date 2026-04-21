import { deleteEvent } from "../server/bookingGateway.js";

export const onDeleteEvent = async (eventId) => {
  try {
    await deleteEvent(eventId);
  } catch (error) {
    alert('Internal Server Error');
  }
};