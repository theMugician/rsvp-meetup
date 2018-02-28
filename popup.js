document.addEventListener('DOMContentLoaded', function() {

  const rsvpButton = document.getElementById('rsvp');

  rsvp.addEventListener('click', function() {

    let re = /\d+[^\/]/;
    let counter = 0;

    const events = [];
    const groupName = document.getElementById('group_name').value;
    const amount = parseInt(document.getElementById('amount').value);
    const key = 'key=77564923301b687169247f3028545';
    const endpoint = `https://api.meetup.com/${groupName}/events`;
    const eventsEndpoint = `${endpoint}?${key}`;

    fetch(eventsEndpoint, {
      headers: {
        'origin': 'chrome-extension://*',
        'content-type': 'application/json',
        'access-control-allow-origin': '*'
      },
    })
      .then(response => response.json())
      .then(data => events = data);

    while(counter < amount) {
      let event = events[counter].link;
      let eventId = event.match(re)[0];
      let eventEndpoint = `${endpoint}/${eventId}/rsvps?${key}`;
      let xhr = new XMLHttpRequest();

      xhr.open('POST', eventEndpoint);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        if (xhr.status === 200) {
            alert('You RSVP\'d YES to event/' + eventId);
        }
        else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
      };
      xhr.send(encodeURI('response=yes'));

      counter++;
    }
  });
  
}, false);