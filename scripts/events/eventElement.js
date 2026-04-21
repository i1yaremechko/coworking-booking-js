export const createEventElement = (event) => {
  const { id, userName, startTime, endTime, description } = event;
  
  const eventElem = document.createElement('div');
  eventElem.classList.add('event');
  eventElem.dataset.eventId = id;

  const startHour = parseInt(startTime.split(':')[0]);
  const endHour = parseInt(endTime.split(':')[0]);
  const multiplier = 60;
  const top = startHour * multiplier;
  const height = (endHour - startHour) * multiplier;

  eventElem.style.top = `${top}px`;
  eventElem.style.height = `${height}px`;

  eventElem.innerHTML = `
    <div class="event__name">${userName}</div>
    <div class="event__time">${startHour}:00 - ${endHour}:00</div>
    <div class="event__description">${event.description || ''}</div>
  `;

  return eventElem;
};