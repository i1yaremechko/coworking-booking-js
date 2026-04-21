import { openModal } from '../common/modal.js';
import { getEventsList } from '../server/bookingGateway.js';

export const initEventHandlers = () => {
  const workspacesGrid = document.querySelector('.booking__workspaces-grid');

  workspacesGrid?.addEventListener('click', async (event) => {
    const eventElem = event.target.closest('.event');
    if (!eventElem) return;

    const eventId = eventElem.dataset.eventId;
    const events = await getEventsList();
    const selectedEvent = events.find(e => e.id === eventId);

    if (selectedEvent) {
      openModal({
        ...selectedEvent,
        isEditMode: true
      });
    }
  });
};