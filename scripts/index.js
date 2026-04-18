import { renderWorkspaces } from "./booking/renderWorkspaces.js";
import { renderTimescale } from "./booking/timescale.js";

document.addEventListener('DOMContentLoaded', () => {
  renderTimescale();
  renderWorkspaces();
});