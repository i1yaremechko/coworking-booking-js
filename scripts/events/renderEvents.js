import { getEvents, getItem, STORAGE_KEY_DISPLAYED_DATE } from '../common/storage.js';
import { createEventElement } from './eventElement.js';

export const renderEvents = () => {
  document.querySelectorAll('.event').forEach(el => el.remove());

  const allEvents = getEvents();
  const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
  const dateStr = new Date(displayedDate).toISOString().split('T')[0];

  const dayEvents = allEvents.filter(event => event.date === dateStr);

  dayEvents.forEach(event => {
    const columnElem = document.querySelector(
      `.workspace-column[data-workspace-id="${event.workspaceId}"]`
    );

    if (columnElem) {
      const eventElem = createEventElement(event);
      columnElem.appendChild(eventElem);
    }
  });
};