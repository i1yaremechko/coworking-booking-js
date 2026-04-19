const desks = ['Desk 1', 'Desk 2', 'Desk 3', 'Desk 4', 'Desk 5'];

export const renderHeader = () => {
  const headerContainer = document.querySelector('.booking__header-days-container');

  const deskMarkup = desks.map((deskName, index) => {
    return `
      <div class="workspace-header" data-workspace-id="${index + 1}">
        <span class="workspace-header__name">${deskName}</span>
      </div>
    `;
  }).join('');

  headerContainer.innerHTML = deskMarkup;
};