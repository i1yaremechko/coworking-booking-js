import { renderBooking } from "./booking/booking.js";
import { initModal } from "./common/modal.js";
import { getItem, setItem, STORAGE_KEY_DISPLAYED_DATE } from "./common/storage.js";
import { initEventHandlers } from "./events/events.js";
import { initNavigation } from "./navigation/navigation.js";

document.addEventListener('DOMContentLoaded', () => {
  const storedDate = getItem(STORAGE_KEY_DISPLAYED_DATE);
  
  if (!storedDate) {
    setItem(STORAGE_KEY_DISPLAYED_DATE, new Date().toISOString());
  }

  // renderWorkspaceOptions(WORKSPACES_COUNT);
  renderBooking();
  initNavigation();
  initModal();
  initEventHandlers();
});