import { renderBooking } from "./booking/booking.js";
import { initModal } from "./common/modal.js";
import { initNavigation } from "./navigation/navigation.js";

document.addEventListener('DOMContentLoaded', () => {
  renderBooking();
  initNavigation();
  initModal();
});