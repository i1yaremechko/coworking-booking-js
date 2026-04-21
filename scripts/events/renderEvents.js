import { getItem, STORAGE_KEY_DISPLAYED_DATE } from '../common/storage.js';
import { getEventsList } from '../server/bookingGateway.js';
import { createEventElement } from './eventElement.js';

export const renderEvents = async () => {
  document.querySelectorAll('.event').forEach(el => el.remove());

  try {
    const events = await getEventsList();
    const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
    const dateStr = new Date(displayedDate).toISOString().split('T')[0];

    const dayEvents = events.filter(event => event.date === dateStr);

    dayEvents.forEach(event => {
      const columnElem = document.querySelector(
        `.workspace-column[data-workspace-id="${event.workspaceId}"]`
      );

      if (columnElem) {
        const eventElem = createEventElement(event);
        columnElem.appendChild(eventElem);
      }
    });
  } catch (error) {
    alert('Internal Server Error');
  }
};