import { createNumbersArray } from "../common/createNumbersArray.js";
import { generateWorkspaceMarkup } from "./workspace.js";

export const renderWorkspaces = () => {
  const gridContainer = document.querySelector('.booking__workspaces-grid');
  const workspaces = createNumbersArray(1, 5);

  gridContainer.innerHTML = workspaces
    .map(id => generateWorkspaceMarkup(id))
    .join('');
};