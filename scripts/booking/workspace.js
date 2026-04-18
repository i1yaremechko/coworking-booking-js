import { createNumbersArray } from '../common/createNumbersArray.js';

const generateWorkspaceSlots = () => {
  const hours = createNumbersArray(0, 23);
  return hours
    .map(hour => `<div class="booking__time-slot" data-time="${hour}"></div>`)
    .join('');
};

export const generateWorkspaceMarkup = (id) => {
  return `
    <div class="workspace-column" data-workspace-id="${id}">
      ${generateWorkspaceSlots()}
    </div>
  `;
};