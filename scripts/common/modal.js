import { renderBooking } from "../booking/booking.js";
import { saveEvent } from "./storage.js";

const modalElem = document.querySelector('.modal');
const formElem = document.querySelector('.booking-form');
const closeBtnElem = document.querySelector('.booking-form__close-btn');

export const openModal = (data = {}) => {
  if (!modalElem || !formElem) return;

  modalElem.classList.remove('hidden');
  formElem.reset();

  if (data.date) formElem.date.value = data.date;
  if (data.startTime) formElem.startTime.value = data.startTime;
  if (data.endTime) formElem.endTime.value = data.endTime;
  if (data.workspaceId) formElem.workspaceId.value = data.workspaceId;

  const confirmMsg = formElem.querySelector('.booking-form__confirm-msg');
  const submitBtn = formElem.querySelector('.booking-form__submit-btn');

  if (data.isConfirmMode) {
    confirmMsg.classList.remove('hidden');
    formElem.userName.classList.add('hidden');
    submitBtn.textContent = 'Confirm Booking';
  } else {
    confirmMsg.classList.add('hidden');
    formElem.userName.classList.remove('hidden');
    submitBtn.textContent = 'Create';
  }
};

export const closeModal = () => {
  modalElem.classList.add('hidden');
};

export const initModal = () => {
  closeBtnElem?.addEventListener('click', closeModal);

  modalElem?.addEventListener('click', (event) => {
    if (event.target.classList.contains('overlay')) {
      closeModal();
    }
  });

  formElem?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formElem);
    const eventData = Object.fromEntries(formData.entries());
    saveEvent(eventData);

    formElem.reset();
    closeModal();
    renderBooking();
  });
};
