import { renderBooking } from "./booking/booking.js";
import { initNavigation } from "./navigation/navigation.js";

document.addEventListener('DOMContentLoaded', () => {
  renderBooking();
  initNavigation();
});