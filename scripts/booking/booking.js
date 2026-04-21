import { renderEvents } from "../events/renderEvents.js";
import { renderHeader } from "./header.js";
import { renderWorkspaces } from "./renderWorkspaces.js";
import { renderTimescale } from "./timescale.js";

export const renderBooking = async () => {
  renderTimescale();
  renderHeader();
  renderWorkspaces();

  await renderEvents();
};