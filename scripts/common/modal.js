import { renderBooking } from "../booking/booking.js";
import { createNewEvent } from "../events/createEvent.js";
import { deleteEvent } from "../events/deleteEvent.js";

const modalElem = document.querySelector('.modal');
const formElem = document.querySelector('.booking-form');
const closeBtnElem = document.querySelector('.booking-form__close-btn');
const deleteBtnElem = document.querySelector('.booking-form__delete-btn');

export const openModal = (data = {}) => {
  if (!modalElem || !formElem) return;

  modalElem.classList.remove('hidden');
  formElem.reset();
  formElem.dataset.eventId = data.id || '';

  if (data.id) {
    deleteBtnElem.classList.remove('hidden');
  } else {
    deleteBtnElem.classList.add('hidden');
  }

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
    const eventId = formElem.dataset.eventId;

    if (createNewEvent(eventData, eventId)) {
      formElem.dataset.eventId = '';
      closeModal();
      renderBooking();
    }
  });

  deleteBtnElem?.addEventListener('click', () => {
    const eventId = formElem.dataset.eventId;
    if (eventId) {
      deleteEvent(eventId);
      closeModal();
      renderBooking();
    }
  });
};
