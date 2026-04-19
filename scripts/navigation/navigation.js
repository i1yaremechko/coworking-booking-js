import { renderBooking } from '../booking/booking.js';
import { openModal } from '../common/modal.js';
import shmoment from '../common/shmoment.js';
import { getItem, setItem, STORAGE_KEY_DISPLAYED_DATE } from "../common/storage.js";
import { getDisplayedDate } from "../common/time.utils.js";

const displayedDateElem = document.querySelector('.navigation__displayed-day');
const navElem = document.querySelector('.navigation');
const bookingBtn = document.querySelector('.booking-desk-btn');

export const renderCurrentDate = () => {
  const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
  if (displayedDateElem) {
    displayedDateElem.textContent = getDisplayedDate(displayedDate);
  }
};

const switchDate = (direction) => {
  if (!direction) return;
  const currentDate = new Date(getItem(STORAGE_KEY_DISPLAYED_DATE));
  setItem(STORAGE_KEY_DISPLAYED_DATE, 
    direction === 'today'
      ? new Date()
      : shmoment(currentDate) [direction === 'next' ? 'add' : 'subtract']
      ('days', 1).result()
  );
  renderCurrentDate();
  renderBooking();
};

export const initNavigation = () => {
  renderCurrentDate();

  navElem?.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-direction]');
    if (btn) switchDate(btn.dataset.direction);
  });

  bookingBtn?.addEventListener('click', () => {
    const displayedDate = new Date(getItem(STORAGE_KEY_DISPLAYED_DATE));
    openModal({ 
      date: displayedDate.toISOString().split('T')[0] 
    });
  });

  const headerContainer = document.querySelector('.booking__header-days-container');
  headerContainer?.addEventListener('click', (event) => {
    const header = event.target.closest('.workspace-header');
    if (!header) return;

    const workspaceId = header.dataset.workspaceId;
    const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);

    openModal({ 
      workspaceId: workspaceId,
      date: new Date(displayedDate).toISOString().split('T')[0]
    });
  });

  const workspacesGrid = document.querySelector('.booking__workspaces-grid');
  workspacesGrid?.addEventListener('click', (event) => {
    const slot = event.target.closest('.booking__time-slot');
    if (!slot) return;

    const column = slot.closest('.workspace-column');
    const workspaceId = column ? column.dataset.workspaceId : null;
    const startTime = slot.dataset.time.padStart(2, '0') + ':00';
    const endTime = (parseInt(slot.dataset.time) + 1).toString().padStart(2, '0') + ':00';
    const date = new Date(getItem(STORAGE_KEY_DISPLAYED_DATE)).toISOString().split('T')[0];

    openModal({
      workspaceId,
      startTime,
      endTime,
      date,
      isConfirmMode: true
    });
  });
};