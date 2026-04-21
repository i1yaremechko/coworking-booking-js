const baseUrl = 'https://69d36635336103955f8eed65.mockapi.io/api/v1/booking';

export const getEventsList = () => 
  fetch(baseUrl).then(response => {
    if (!response.ok) throw new Error("Failed to fetch events");
    return response.json();
  });

export const createEvent = (eventData) => 
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  }).then(response => {
    if (!response.ok) throw new Error("Failed to create event");
    return response.json();
  });

export const updateEvent = (eventId, eventData) => 
  fetch(`${baseUrl}/${eventId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  }).then(response => {
    if (!response.ok) throw new Error("Failed to update event");
    return response.json();
  });

export const deleteEvent = (eventId) => 
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) throw new Error("Failed to delete event");
  });