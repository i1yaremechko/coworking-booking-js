import { renderHeader } from "./header.js";
import { renderWorkspaces } from "./renderWorkspaces.js";
import { renderTimescale } from "./timescale.js";

export const renderBooking = () => {
  renderTimescale();
  renderHeader();
  renderWorkspaces();
};