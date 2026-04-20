import { openModal } from '../common/modal.js';
import { getEvents } from '../common/storage.js';

export const initEventHandlers = () => {
  const workspacesGrid = document.querySelector('.booking__workspaces-grid');

  workspacesGrid?.addEventListener('click', (event) => {
    const eventElem = event.target.closest('.event');
    if (!eventElem) return;

    const eventId = eventElem.dataset.eventId;
    const allEvents = getEvents();
    const selectedEvent = allEvents.find(e => e.id === eventId);

    if (selectedEvent) {
      openModal({
        ...selectedEvent,
        isEditMode: true
      });
    }
  });
};