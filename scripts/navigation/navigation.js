import { renderBooking } from '../booking/booking.js';
import shmoment from '../common/shmoment.js';
import { getItem, setItem, STORAGE_KEY_DISPLAYED_DATE } from "../common/storage.js";
import { getDisplayedDate } from "../common/time.utils.js";

const displayedDateElem = document.querySelector('.navigation__displayed-day');
const navElem = document.querySelector('.navigation');

export const renderCurrentDate = () => {
  const displayedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
  displayedDateElem.textContent = getDisplayedDate(displayedDate);
};

const switchDate = (direction) => {
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
  navElem.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-direction]');
    if (!btn) return;

    const { direction } = btn.dataset;
    switchDate(direction);
  });

  renderCurrentDate();
};