import { getEvents, getItem, STORAGE_KEY_DISPLAYED_DATE } from '../common/storage.js';

const getEventsByDate = (events, date) => {
  const dateStr = new Date(date).toISOString().split('T')[0];
  return events.filter(event => event.date === dateStr);
};

export const renderEvents = () => {
  document.querySelectorAll('.event').forEach(el => el.remove());

  const allEvents = getEvents();
  const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
  
  const dayEvents = getEventsByDate(allEvents, displayedDate);

  dayEvents.forEach(event => {
    const columnElem = document.querySelector(
      `.workspace-column[data-workspace-id="${event.workspaceId}"]`
    );

    if (columnElem) {
      const eventElem = document.createElement('div');
      eventElem.classList.add('event');

      const [startH, startM] = event.startTime.split(':').map(Number);
      const [endH, endM] = event.endTime.split(':').map(Number);

      const top = startH * 60 + startM;
      const height = (endH * 60 + endM) - top;

      eventElem.style.top = `${top}px`;
      eventElem.style.height = `${height}px`;

      eventElem.innerHTML = `
        <div class="event__name">${event.userName}</div>
        <div class="event__time">${event.startTime} - ${event.endTime}</div>
      `;

      columnElem.appendChild(eventElem);
    }
  });
};